/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1d1d1d',
        'white-secondary': '#e8e6e3',
        'black-light': '#515152',
      },
      fontFamily: {
        cursive: "'La Belle Aurore', cursive",
        sans: 'sans-serif',
        rouge: "'Rouge Script', cursive",
      },
      screens: {
        ssm: '550px',
      },
      letterSpacing: {
        tightests: '-.05em',
      },
    },
  },
  plugins: [],
};
