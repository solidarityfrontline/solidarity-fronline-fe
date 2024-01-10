/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        gray: {
          primary: '#EDEDED'
        },
        black: {
          secondary: '#111111'
        },
        yellow: {
          primary: '#FFA500'
        }
      }
    },
  },
  plugins: [],
}

