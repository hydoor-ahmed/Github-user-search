/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        h1Color: "#2a3341",
        btn: "#07f",
      },
      screens: {
        xs: '376px'
      }
    },
  },
  plugins: [],
};
