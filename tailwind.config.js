/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,css}",
    "./public/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
    
      fontFamily: {
          'amita ': ['Montserrat', 'sans-serif']
      }
    },
  },
  
  plugins: [ require('tailwind-scrollbar-hide')],
}
