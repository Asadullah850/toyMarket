/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/9TsK5Wm/404.gif')",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}