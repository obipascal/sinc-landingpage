/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        primary: '#20888F',
        secondary: "#303030",
        'danger': 'rgb(220 38 38)',
        'warning': 'rgb(251 146 60)',
      },
      screens: {
        'xs': '300px',
        'xs-75': '375px',
        'sm-4': '400px',
        'xl-2k':'2560px',
        'xl-1k':'1440px',
     }
    },
  },
  plugins: [],
}

