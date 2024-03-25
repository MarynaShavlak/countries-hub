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
        uiBaseWhite: '#ffffff',
        uiBaseBlack: '#111517',
        red: '#f75852',
        green: '#03a457',
        greenLight: '#49de96',
        violet: '#635684',
        blue: '#2181ce',
        yellow: '#ffde0b',
        border: '#8fe9d4',
        darkMain: '#202c37',
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
        dark: '#49de96 0px 5px 20px, #49de96 0px 5px 20px',
        card: '0 0 11px #03a457;',
      },
    },
  },
  plugins: [],
};
