module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CCD6F6",    // your new primary color (light bluish)
        secondary: "#C084FC",  // your new secondary color (purple)
        tertiary: "#BBF7D0",
        footerfont: '#37527C', // existing footer font color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        logoFont: ['NTR', 'sans-serif'],  // add sans-serif fallback to NTR
      },
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  darkMode: 'class',
  plugins: [],
}
