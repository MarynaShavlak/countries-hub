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
        itemRed: '#f75852',
        itemGreen: '#03a457',
        itemViolet: '#635684',
        itemBlue: '#2181ce',
      },
      minWidth: {
        128: '32rem',
      },
      borderRadius: {
        50: '50px',
      },
    },
  },
  plugins: [],
};
