/* eslint-disable linebreak-style */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'dark-aqua': '#0B6D6A',
        'dark-teal': '#064B49',
        'white-dirt': '#FAF9FA',
        'light-blue': '#00A1DE',
        gray: {
          300: '#F5F5F5',
          200: '#E5E5E5',
          400: '#E3E3E3',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
