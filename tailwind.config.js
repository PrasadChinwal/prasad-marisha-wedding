/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          backdropBlur: {
              xxs: '1px',
              xs: '2px',
          }
      }
  },
  plugins: [],
}
