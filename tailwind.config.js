/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#151515",
        },
      },
      backgroundImage: {
        hero: "url(../public/assets/bg-hero.svg)",
        glitter: "url(../public/assets/bg-glitter.png)",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        anton: ["Anton", ...defaultTheme.fontFamily.sans],
        abc: ["ABC Diatype", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
