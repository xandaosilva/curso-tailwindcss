/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  //darkMode: "media",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose,
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
