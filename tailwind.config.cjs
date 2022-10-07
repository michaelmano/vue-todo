/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["'Roboto'", "sans-serif"]
      },
      colors: {
        connx: {
          grey: {
            300: '#ccc',
          }
        },
      },
    },
  },
  plugins: [],
}
