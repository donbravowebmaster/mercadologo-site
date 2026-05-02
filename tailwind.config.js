/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#EC221F",
          gray: "#848484",
        },
      },
    },
  },
  plugins: [],
}
