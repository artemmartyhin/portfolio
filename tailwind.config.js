/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#161513",
        "secondary-text": "#c5c5c5",
        "primary-color": "#fff",
        gray: {
          "100": "#1a1919",
          "200": "rgba(34, 34, 34, 0.7)",
        },
        "light-grey": "#8491a0",
        "card-color": "#2a2a2a",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        lg: "18px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "mini-1": "14.1px",
      "4xl-5": "23.5px",
      lgi: "19px",
      "mini-5": "14.5px",
      "2xl-7": "21.7px",
      mid: "17px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      "3xs": "10px",
      xl: "20px",
      base: "16px",
      "2xl-4": "21.4px",
      lg: "18px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
