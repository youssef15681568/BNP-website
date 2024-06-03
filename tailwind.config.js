/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#26355D",
        secondary:"#FF8F00",
        thirtiary:"#FFDB00"
      }
    },


    fontFamily:{
      roboto : "'Roboto'",
      martian : "'Martian+Mono'"
    }
  },
  plugins: [],
}

