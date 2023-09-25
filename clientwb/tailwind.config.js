/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        fundo : "#373F51",
        text : "#D8DBE2",
        destaque : "#58A4B0",
        secudaria : "#A9BCD0"
      }
    },
  },
  plugins: [],
}