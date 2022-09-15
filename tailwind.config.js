/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
          'space': "url('/src/Assets/background.jpg')",
      },
      fontFamily: {
          'amita ': ['Montserrat', 'sans-serif']
      }
    },
  },
  
  plugins: [],
}
