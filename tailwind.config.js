/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: { extend: {
    colors: {
      blackish: 'rgba(48, 48, 48, 1)',
      blackLight: 'rgba(0, 0, 0, 0.5)',
    },
    fontSize: {
      base: '0.94rem'
    },
    backgroundImage: {
      'day': "url('./assets//bg-day.jpg')",
      'night': "url('./assets//bg-night.jpg')",
    },
    screens: {
      'dt': '1440px'
    }
  } },
  variants: { extend: {} },
  plugins: [],
}