/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        neutral: '#23252F',
        secondary: '#3B3A51',
      },
    },
    colors: {
      black: 'hsl(0, 0%, 5%)',
      purple: 'hsl(245, 49%, 64%)',
      red: '#CC3332',
    },
  },
  plugins: [],
}
