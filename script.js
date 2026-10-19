/* Hero field: a grid of storage slots; random writes flash in the accent
   colour and fade, with an occasional block-boundary sweep. Pauses when the
   hero is off screen; draws one still frame under reduced motion. */
(function () {
  var canvas = document.getElementById('field');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pitch = 18, dots = [], writes = [], sweep = null;
  var W = 0, H = 0, cols = 0, rows = 0, dpr = 1, running = false, last = 0;

  function css(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

  function resize() {
    var r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(W / pitch) + 1; rows = Math.ceil(H / pitch) + 1;
    dots = [];
    for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) dots.push({ x: x * pitch + pitch / 2, y: y * pitch + pitch / 2 });
  }

  function spawn(now) {
    var n = 1 + Math.floor(Math.random() * 3);
    var cx = Math.floor(Math.random() * cols), cy = Math.floor(Math.random() * rows);
    for (var i = 0; i < n; i++) {
      var x = Math.min(cols - 1, Math.max(0, cx + Math.floor(Math.random() * 5) - 2));
      var y = Math.min(rows - 1, Math.max(0, cy + Math.floor(Math.random() * 3) - 1));
      writes.push({ x: x * pitch + pitch / 2, y: y * pitch + pitch / 2, t0: now, life: 1400 + Math.random() * 1200 });
    }
    if (writes.length > 90) writes.splice(0, writes.length - 90);
  }

  function draw(now) {
    var dotColor = css('--field-dot') || 'rgba(160,170,180,0.1)';
    var acc = css('--field-write') || '242, 181, 68';
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = dotColor;
    for (var i = 0; i < dots.length; i++) { ctx.fillRect(dots[i].x - 1, dots[i].y - 1, 2, 2); }

    for (var j = writes.length - 1; j >= 0; j--) {
      var w = writes[j], p = (now - w.t0) / w.life;
      if (p >= 1) { writes.splice(j, 1); continue; }
      var a = p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85;
      var s = 3 + (1 - p) * 3;
      ctx.fillStyle = 'rgba(' + acc + ',' + (a * 0.9).toFixed(3) + ')';
      ctx.fillRect(w.x - s / 2, w.y - s / 2, s, s);
      ctx.fillStyle = 'rgba(' + acc + ',' + (a * 0.18).toFixed(3) + ')';
      ctx.fillRect(w.x - s * 1.8, w.y - s * 1.8, s * 3.6, s * 3.6);
    }

    if (sweep) {
      var sp = (now - sweep.t0) / sweep.life;
      if (sp >= 1) sweep = null; else {
        var yy = sp * H;
        var g = ctx.createLinearGradient(0, yy - 40, 0, yy + 2);
        g.addColorStop(0, 'rgba(' + acc + ',0)');
        g.addColorStop(1, 'rgba(' + acc + ',' + (0.22 * (1 - sp)).toFixed(3) + ')');
        ctx.fillStyle = g; ctx.fillRect(0, yy - 40, W, 42);
      }
    }
  }

  function frame(now) {
    if (!running) return;
    if (now - last > 90 + Math.random() * 220) { spawn(now); last = now; }
    if (!sweep && Math.random() < 0.0025) sweep = { t0: now, life: 2600 };
    draw(now);
    requestAnimationFrame(frame);
  }

  function start() { if (running || reduce) return; running = true; requestAnimationFrame(frame); }
  function stop() { running = false; }

  resize();
  if (reduce) {
    var t = performance.now();
    for (var k = 0; k < 14; k++) spawn(t - Math.random() * 600);
    draw(t);
  } else {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es[0].isIntersecting ? start() : stop(); }).observe(canvas);
    } else start();
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  }
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { resize(); if (reduce) draw(performance.now()); }, 120); });
})();

/* Live mainnet head in the hero kicker. Tries a few public RPCs; stays on the
   static label if none answer (e.g. offline or blocked by CSP). */
(function () {
  var el = document.getElementById('head');
  if (!el || !window.fetch) return;
  var rpcs = ['https://ethereum-rpc.publicnode.com', 'https://cloudflare-eth.com', 'https://eth.llamarpc.com'];
  var idx = 0, lastN = 0;
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function tick() {
    var url = rpcs[idx % rpcs.length];
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = ctrl && setTimeout(function () { ctrl.abort(); }, 4000);
    fetch(url, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}',
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) { return r.json(); }).then(function (j) {
      var n = parseInt(j.result, 16);
      if (!n || n < lastN) throw new Error('bad');
      lastN = n;
      el.textContent = 'Ethereum mainnet · block ' + fmt(n);
    }).catch(function () { idx++; }).then(function () { if (timer) clearTimeout(timer); });
  }
  tick();
  setInterval(tick, 12000);
})();

/* Kiwi looks around. 35 poses on a 7x5 grid (column = left..right, row =
   up..down, centre = 3,2). The shown frame walks one cell at a time toward a
   target cell at a steady flip rate, so every turn passes through the poses
   in between: a flipbook, no blending. The target follows the pointer on
   desktop (with hysteresis so it never chatters on a cell edge); when idle
   it glances somewhere at random and comes back. */
(function () {
  var k = document.getElementById('kiwi'), kf = document.getElementById('kf');
  if (!k || !kf || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var COLS = 7, ROWS = 5, cc = 3, cr = 2, tc = 3, tr = 2;
  var STEP = 70, last = 0, raf = 0, hover = false, idleTimer = null, glance = null;

  function render() { kf.style.backgroundPosition = (cc / (COLS - 1) * 100) + '% ' + (cr / (ROWS - 1) * 100) + '%'; }
  function loop(now) {
    if (cc === tc && cr === tr) { raf = 0; return; }
    if (now - last >= STEP) {
      if (cc !== tc) cc += tc > cc ? 1 : -1;
      if (cr !== tr) cr += tr > cr ? 1 : -1;
      last = now; render();
    }
    raf = requestAnimationFrame(loop);
  }
  function target(c, r) {
    tc = Math.max(0, Math.min(COLS - 1, c)); tr = Math.max(0, Math.min(ROWS - 1, r));
    if (!raf) raf = requestAnimationFrame(loop);
  }

  /* idle: look somewhere, hold, come back, wait */
  function wander(delay) {
    clearTimeout(glance);
    glance = setTimeout(function () {
      if (hover) return;
      var c = Math.floor(Math.random() * COLS), r = Math.floor(Math.random() * ROWS);
      if (Math.abs(c - 3) < 2 && Math.abs(r - 2) < 2) c = Math.random() < 0.5 ? 0 : 6;
      target(c, r);
      var hold = 900 + Math.random() * 1200;
      if (Math.random() < 0.35) {
        setTimeout(function () { if (!hover) target(6 - c, Math.round(2 + (r - 2) * 0.4)); }, hold);
        hold += 1300;
      }
      setTimeout(function () { if (!hover) target(3, 2); }, hold);
      wander(2800 + Math.random() * 3400);
    }, delay);
  }

  /* pointer: cell that faces the cursor, with hysteresis */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var hero = k.closest('.hero'), pc = 3, pr = 2;
    hero.addEventListener('pointermove', function (e) {
      var b = k.getBoundingClientRect();
      var ox = b.left + b.width * 0.5, oy = b.top + b.height * 0.38;       /* about the head */
      var x = (e.clientX - ox) / (b.width * 0.75), y = (e.clientY - oy) / (b.height * 0.75);
      var fc = (Math.max(-1, Math.min(1, x)) + 1) / 2 * (COLS - 1);
      var fr = (Math.max(-1, Math.min(1, y)) + 1) / 2 * (ROWS - 1);
      if (Math.abs(fc - pc) > 0.65) pc = Math.round(fc);
      if (Math.abs(fr - pr) > 0.65) pr = Math.round(fr);
      hover = true; target(pc, pr);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () { hover = false; target(3, 2); wander(2000); }, 3000);
    });
    hero.addEventListener('pointerleave', function () {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () { hover = false; target(3, 2); wander(1500); }, 400);
    });
  }
  document.addEventListener('visibilitychange', function () { if (document.hidden) clearTimeout(glance); else if (!hover) wander(800); });
  render();
  wander(1600);
})();

document.getElementById('year').textContent = new Date().getFullYear();
