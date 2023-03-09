/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#131c21",
        button: "#03A65A",
        box: "#005d4b",
        font: "#E2E7E9",
      },
    },
    fontFamily: {
      sans: ["Segoe UI", "sans-serif"],
    },
  },
  plugins: [],
};
