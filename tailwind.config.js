/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: '#F3F3F3',
        primary: '#031FDC',
        ancient: '#59E7DE'
      },
      boxShadow: {
        filter: '0px 10px 40px rgba(0, 0, 0, 0.1)',
        card: '0px 4px 22px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}