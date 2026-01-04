/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Sorts Mill Goudy', 'serif'],
      },
      colors: {
        'brand': {
          'dark': '#2c2c2c',
          'gray': '#666666'
        }
      }
    },
  },
  plugins: [],
}