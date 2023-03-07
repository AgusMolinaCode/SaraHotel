/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'principal' : ['Permanent Marker', 'cursive'],
      'secundario': ['Josefin Sans', 'sans-serif']
    },
    colors: {
      'principal' : '#edcb9a',
      'principal_oscuro' : '#b3a694',
      'hover' : '#e3b97d',
      'black' : '#0f172a',
      'white' : '#fff',
      'dorado': '#dbeb43',
      'green' : '#50d416',
      'red'   : '#f95179',
    },
    extend: {
      screens: {
        'lg': '1226px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
}
