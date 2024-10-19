/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
   
    container: {
      center: true,
      screens:{
        "2xl":'1300px'
      }
    },
   
    extend: {
      colors:{
        "mycolor":"#94A3B8"
            },
    },
  },
  plugins: [],
}