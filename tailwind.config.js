/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: { extend: {
    colors: {
      'dark-red': '#640032',
      'purple': '#270041',
      'dirty-orange': '#ce5c00',
      'modal': 'rgba(0, 0, 0, 0.8)'
    },
    backgroundImage: {
      'day': "url('./assets//bg-day.jpg')",
    }
  } },
  variants: { extend: {} },
  plugins: [],
}