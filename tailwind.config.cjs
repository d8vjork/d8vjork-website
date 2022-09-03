/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      minHeight: {
        '128': '48rem'
      }
    },
  },
  plugins: [],
}
