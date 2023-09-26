/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        fundo1 : "#25242C",
        fundo2 : "#E59638",
        text : "#8C9494",
        destaque : "#58A4B0",
        secudaria : "#9A0D2F"
      }
    },
  },
  plugins: [],
}