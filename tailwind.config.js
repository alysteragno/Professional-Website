/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontColor: "#ccd6f6", 
        navBg: "#060e1a"
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], 
        'logoFont': ['NTR'],
      },
    },
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
  },
  darkMode: 'class', // or 'media'
  plugins: [],
}