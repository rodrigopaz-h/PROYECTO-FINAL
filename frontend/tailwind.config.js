/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        naranja: '#C95723', // paprika
        amarillo: '#F5AF33', // tumeric
        limon: '#C8C346', // lemongrass
        verde: '#1F532F', // caribben
        tierra: '#705D63', // caribben
        naranjal: '#FFE7DC', // paprika-light
        amarillol: '#FFF2DB', // tumeric-light
        limonl: '#FFFC8F', // lemongrass-light
        verdel: '#C5FFD7', // caribben-light
        tierral: '#DDDDDD', // caribben-light
      },
    },
  },
  plugins: [],
}

