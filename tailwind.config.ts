import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      clipPath: {
        diamond: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
      },
      linearGradientColors: {
        'custom-gradient': ['90deg', '#2AFCFF', '#9FF756', '#02FFAB'],
      },
      backgroundImage: {
        'custom-bg': '#rgba(1, 33, 51, 1)',
        'background-image': 'linear-gradient(to left, #9df758 10%,  #01FAA9 100%, #01FAA9 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(to right, rgba(0, 48, 76, 1), rgba(0, 114, 178, 1))',
        'custom-bgmenu': 'linear-gradient(to right ,#00FB91, #2AFCFF)',
        element: 'linear-gradient(to right, #9DF75A, #02FFAC)',
        bgtefood: "url('/images/SOLUTION/Grouptefood.png')",
      },
      colors: {
        custombenefit: '#012133',
        customGreen: 'rgba(157, 247, 90, 1)',
        customBlue: 'rgba(6, 100, 153, 0.3)',
        custombenefit1: 'rgba(6, 100, 153, 0.3)',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      height: {
        '21': '500px',
        '101': '562px',

        '100': '2000px',
      },
      spacing: {
        '3px': '53%',
      },
      fontFamily: {
        sans: '"Inter var", sans-serif',
      },
      objectFit: {
        cover: 'cover',
      },
    },
    clipPath: {
      diamond: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
    },
  },

  plugins: [],
});
