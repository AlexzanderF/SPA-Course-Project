const defaultColors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...defaultColors,
      },
      backgroundImage: theme => ({
        'guest-page': "url('./guest-page-background.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
