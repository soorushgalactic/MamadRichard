/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  /* prettier-ignore */
  theme: {
    extend: {
      screens: {
        /* prettier-ignore */
        // 'xs': '300px',
        // => @media (min-width: 300px) { ... }
        'sm': "640px",
        // => @media (min-width: 640px) { ... }
        'md': "768px",
        // => @media (min-width: 768px) { ... }
        'lg': "1024px",
        // => @media (min-width: 1024px) { ... }
        'xl': "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      height: {
        "0.4screen": "40vh",
        "0.5screen": "50vh",
        "0.6screen": "60vh",
        "0.7screen": "70vh",
        "0.8screen": "80vh",
        
      },
      backgroundImage: {
        'bgLogo': "url('/img/bgLogo.png')",
        'smLogo': "url('/img/smLogo.png')",
        'backSvg': "url('/img/wave.png')",
        'boxGradient':
          "linear-gradient(38deg, #181818 0%, rgba(51, 51, 51, 0.86) 52.60%, rgba(217, 217, 217, 0.00) 400%);",
      },
    },
    fontFamily: {
      /* prettier-ignore */
      'Inter': ["Inter"],
      'Rubik': ["Rubik"],
    },
  },
  plugins: [],
};
