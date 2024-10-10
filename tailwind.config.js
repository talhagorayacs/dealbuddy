/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #0AB39C 50%, #405189 100%)', // Your custom gradient
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font here
      },
    },
  },
  plugins: [],
}
