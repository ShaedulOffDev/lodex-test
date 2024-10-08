/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 10
      },
      colors: {
        "primary": "#0CA145",
        "secondary": "#0B913E",
        "pink": "#FEAAE1",
        "light-green": "#7AE9A4",
        "light-green2": "#B7DEBF",
      }
    },
  },
  plugins: [],
}