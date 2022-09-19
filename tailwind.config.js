/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    
      fontFamily: {
          'amita ': ['Montserrat', 'sans-serif']
      }
    },
  },
  
  plugins: [ require('tailwind-scrollbar-hide')],
}
