/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // alteradno valores default
    colors: {
      black: "#010101",
      red: "#a83246"
    },

    //breakpoints
    screens: {
      "tablet": "640px",
      "cel": {"max": "400px"}
    },
    extend: {
      // customizando cores
      colors: {
        "new-blue": "#243c5a",
        gray:{
          ...colors.gray,
          "900": "#999"
        }
      },
      spacing:{
        "50": "20rem"
      }
    },
  },
  plugins: [],
}
