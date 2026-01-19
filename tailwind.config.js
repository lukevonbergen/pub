/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'gold': {
          DEFAULT: '#C4A052',
          light: '#D4B872',
          dark: '#A48832'
        },
        'navy': {
          DEFAULT: '#1a1f3d',
          light: '#2a3050',
          dark: '#12152d'
        },
        'cream': {
          DEFAULT: '#f5f3ef',
          dark: '#eae7e0'
        }
      }
    },
  },
  plugins: [],
}
