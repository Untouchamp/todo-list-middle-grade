/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        width: {
            '300': '18.75rem'
        },
        boxShadow: {
            '3xl': '30px 40px 30px -15px rgba(0, 0, 0, 0.8)',
            'inner': 'inset 0px 0px 40px 15px rgba(0, 0, 0, 0.6)',
        }
    },
  },
  plugins: [],
}
