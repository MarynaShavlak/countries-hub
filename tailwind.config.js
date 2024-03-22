/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      colors: {
        uiBase: 'hsl(0, 0%, 100%)',
        red: '#f75852',
        green: '#03a457',
        greenLight: '#03a456ab',
        violet: '#635684',
        blue: '#2181ce',
        yellow: '#ffde0b',
        border: '#8fe9d4',
      },
      minWidth: {
        128: '32rem',
      },
      width: {
        100: '100px',
        300: '300px',
        400: '400px',
      },
      height: {
        200: '200px',
        300: '300px',
      },
      borderRadius: {
        50: '50px',
      },
      boxShadow: {
        hover:
          'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      },
    },
  },
  plugins: [],
};
