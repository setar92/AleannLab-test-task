/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'Serif': 'Proxima Nova',
    },
    container: {
      center: true,
    },
    screens: {
      'ld': { 'max': '1920px' },
      'sm': { 'max': '414px' },
    },
    extend: {
      colors: {
        primary: 'EFF0F5',
        secondary: '#F5F5F5',
      },
    },
  },
  plugins: [],
};
