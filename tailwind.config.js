/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':"#010851",
        'secondary':"#9A7AF1",
        "third":"#707070",
        "pink":"#EE9AE5",
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"],
  }
});