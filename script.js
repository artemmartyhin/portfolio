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

/* Kiwi looks around. Gaze is a point (u, v) in [-1, 1]^2 that eases toward a
   target every frame; the nine poses of the sprite sheet are blended with
   bilinear weights at that point, so there is never a hard switch. The stack
   also shifts and tilts a little toward the gaze. Target follows the pointer
   on desktop; when idle it wanders to a random direction and drifts back. */
(function () {
  var k = document.getElementById('kiwi');
  if (!k || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var stack = k.querySelector('.kstack');
  var layers = [];
  k.querySelectorAll('.kf').forEach(function (el) { layers[+el.getAttribute('data-f')] = el; });

  var u = 0, v = 0, tu = 0, tv = 0, ease = 0.06, hover = false, idleTimer = null, raf = 0;
  var w = [0, 0, 0, 0, 0, 0, 0, 0, 0], lastOp = [0, 0, 0, 0, 1, 0, 0, 0, 0];

  function smooth(t) { return t * t * (3 - 2 * t); }

  function paint() {
    var cx = u + 1, ry = v + 1;                       /* 0..2 across the grid */
    var i0 = Math.min(1, Math.floor(cx)), j0 = Math.min(1, Math.floor(ry));
    var fx = smooth(cx - i0), fy = smooth(ry - j0);
    for (var n = 0; n < 9; n++) w[n] = 0;
    w[j0 * 3 + i0] = (1 - fx) * (1 - fy);
    w[j0 * 3 + i0 + 1] = fx * (1 - fy);
    w[(j0 + 1) * 3 + i0] = (1 - fx) * fy;
    w[(j0 + 1) * 3 + i0 + 1] = fx * fy;
    /* "over" compositing: layer opacity = its weight over the sum so far */
    var sum = 0;
    for (var m = 0; m < 9; m++) {
      sum += w[m];
      var a = sum > 0.0005 ? w[m] / sum : 0;
      if (Math.abs(a - lastOp[m]) > 0.002) { layers[m].style.opacity = a.toFixed(3); lastOp[m] = a; }
    }
    stack.style.transform = 'translate(' + (u * 9).toFixed(1) + 'px,' + (v * 5).toFixed(1) + 'px) rotate(' + (u * 2.2).toFixed(2) + 'deg)';
  }

  function tick() {
    u += (tu - u) * ease; v += (tv - v) * ease;
    paint();
    if (Math.abs(tu - u) > 0.002 || Math.abs(tv - v) > 0.002) raf = requestAnimationFrame(tick);
    else { u = tu; v = tv; paint(); raf = 0; }
  }
  function go(x, y, e) {
    tu = Math.max(-1, Math.min(1, x)); tv = Math.max(-1, Math.min(1, y)); ease = e;
    if (!raf) raf = requestAnimationFrame(tick);
  }

  /* idle wander: look somewhere, hold, drift back, wait */
  var glance = null;
  function wander(delay) {
    clearTimeout(glance);
    glance = setTimeout(function () {
      if (hover) return;
      var ang = Math.random() * Math.PI * 2, r = 0.7 + Math.random() * 0.3;
      go(Math.cos(ang) * r, Math.sin(ang) * r * 0.9, 0.045);
      var hold = 900 + Math.random() * 1100;
      if (Math.random() < 0.35) {
        setTimeout(function () { if (!hover) go(-Math.cos(ang) * 0.8, Math.sin(ang) * 0.3, 0.04); }, hold);
        hold += 1100;
      }
      setTimeout(function () { if (!hover) go(0, 0, 0.035); }, hold);
      wander(2600 + Math.random() * 3400);
    }, delay);
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var hero = k.closest('.hero');
    hero.addEventListener('pointermove', function (e) {
      var r = k.getBoundingClientRect();
      var ox = r.left + r.width * 0.5, oy = r.top + r.height * 0.42;     /* about the head */
      hover = true;
      go((e.clientX - ox) / (r.width * 0.7), (e.clientY - oy) / (r.height * 0.7), 0.11);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () { hover = false; go(0, 0, 0.04); wander(1800); }, 3000);
    });
    hero.addEventListener('pointerleave', function () {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () { hover = false; go(0, 0, 0.04); wander(1500); }, 400);
    });
  }
  document.addEventListener('visibilitychange', function () { if (document.hidden) clearTimeout(glance); else if (!hover) wander(800); });
  wander(1600);
})();

document.getElementById('year').textContent = new Date().getFullYear();
