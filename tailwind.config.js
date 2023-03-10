/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-sky-600': '#0369a1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
