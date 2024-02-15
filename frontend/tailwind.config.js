/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pacman-bg': '#FFFF00', // PAC-MAN yellow
        'pacman-text': '#0000FF', // PAC-MAN blue
      }
    },
  },
  plugins: [],
}

