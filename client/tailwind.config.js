module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1D1D27',
        primary: '#7D4BCD',
        bglight: '#292938',
        input: '#37374A',
        bgselected: '#1D1D27',
        purpleselected: '#6132AF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
