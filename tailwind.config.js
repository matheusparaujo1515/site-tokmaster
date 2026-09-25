/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E52320",
          hover: "#C81E1C",
          light: "#FEF2F2",
          border: "#FCA5A5"
        }
      }
    },
  },
  plugins: [],
}
