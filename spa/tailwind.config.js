module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // 'layout': 'minmax(300px, 500px)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
