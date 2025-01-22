/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#E5DCD3",
        secondary:"#F1EDE9",
        thirdary:"#F5F3F2",
        buttonBlue:"#002C5F",
        textBlue:"#007fa8"
      }
    },
  },
  plugins: [],
}