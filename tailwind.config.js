/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Italiana', 'serif'],
        bodoni: ['Bodoni Moda', 'serif']
      },
      colors: {
        sand: '#DED6CC',
      },
    },
  },
  plugins: [],
};