/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
   
    container: {
      center: true,
      screens:{
        
        "sm":"620px",
        "md":"1000px",
        "lg":"1100px",
        "2xl":'1200px'
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