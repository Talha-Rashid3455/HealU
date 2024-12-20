// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:
//       {
//         custom_blue:'#0098B9',
            customWhite: '#fefefe', 

//       }
//     },
//   },
//   plugins: [],
// };


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

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Update the paths according to your project structure
  ],
  theme: {
    extend: {
      colors:
      {
    custom_blue:'#0098B9',
            customWhite: '#fefefe',
          custompurple:'#6c5ce7'}}
  },
  plugins: [],
}
