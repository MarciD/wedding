/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Inspiration', 'sans-serif'],
      body: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
};
