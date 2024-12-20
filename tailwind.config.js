/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1ED05D",
        secondary: "#b3b3b3"
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [flowbite],
}

