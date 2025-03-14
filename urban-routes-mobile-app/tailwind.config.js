import ColorsForPage from './constants/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}"
 ],
 presets: [require("nativewind/preset")],
  theme: {
    extend: {
       colors: {
          common: {
            blue: "#007BFF",
            red: "#DC354580",
            green: "#28A74580",
            yellow: "#FFC10780",
            purple: "#6F42C180",
            orange: "#FD7E1480",
            black: "#212529",
            white: "#F8F9FA",
          },
          theme: {
            black: "#212529",
            white: "#F8F9FA",
          },
          app: {
            primary: '#003CB5',
            secondary: '#EEEEEE',
            accent: '#99D1FF',
            backgroundLight: '#E6F4FF',
            backgroundDark: '#004080',
            textLight: '#FFFFFF',
            textDark: '#1E1E1E',
          }
        }
      }
  },
  plugins: [],
}

