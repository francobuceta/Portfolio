/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        secular: ['Secular One', 'sans-serif']
      },
      colors: {
        primary: "#005691",
        secondary: "#4cb1f6",
        grey: "#e8f1f5",
        white: "#f5f5f5",
        dark: "rgb(15, 15, 17)"
      }
    },
  },
  plugins: [],
}
