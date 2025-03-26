import ColorsForPage from './constants/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
    "./constants/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}"
 ],
 presets: [require("nativewind/preset")],
  theme: {
    extend: {
       colors: {
          common: {
            blue: "#007BFF",
            red: "#DC3545",
            green: "#28A745",
            yellow: "#FFC107",
            purple: "#6F42C1",
            orange: "#FD7E14",
            black: "#212529",
            white: "#F8F9FA",
          },
          theme: {
            black: "#212529",
            white: "#F8F9FA",
          },
          app: {
            // primary: '#003CB5',
            primary: '#0d6cf2',
            // secondary: '#EEEEEE',
            secondary: '#888',
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

