/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      colors: {
        dark: {
          100: '#ccd0d4',
          200: '#b3b9bf',
          300: '#99a1a9',
          400: '#808a94',
          500: '#66737f',
          600: '#4d5b69',
          700: '#334454',
          800: '#1a2c3e',
          900: '#001529',
        },
      },
    },
  },
  plugins: [],
};
