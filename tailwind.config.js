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
      },
    },
  },
  plugins: [],
};
