/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        capriola: ["Capriola", "sans-serif"],
        roboto: ["Roboto", "san-serif"],
        nunito: ["Nunito", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        'hire': '0px 15px 25px 0px rgba(255, 79, 110, 0.37)',
        'talk': '0px 10px 18px 0px rgba(88, 188, 199, 0.40)'
      },
      colors: {
        "line": "rgba(150, 205, 255, 0.25)"
      }
    },
  },
  plugins: [],
};
