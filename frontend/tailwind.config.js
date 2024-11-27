/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        custom_blue:'#0098B9'
      }
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/*/.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }