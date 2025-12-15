/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in-top': 'slide-in-top 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in-bottom': 'slide-in-bottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}