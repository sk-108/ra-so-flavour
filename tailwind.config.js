/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: '#FC8019',
        lightbg: '#FFF8F2',
        darktext: '#333333',
        lighttext: '#666666',
      },
    },
  },
  plugins: [],
}