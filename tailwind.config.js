/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  safelist: [
    "animate-slide-in-left",
    "animate-slide-in-right",
    "animate-slide-in-up",
  ],
  theme: {
    extend: {
      fontFamily: {
        torus: ['"Torus"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
