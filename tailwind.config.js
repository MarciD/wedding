/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Inspiration', 'serif'],
      body: ['Robot', 'sans-serif'],
    },
  },
  plugins: [],
};
