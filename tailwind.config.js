/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "responsive-cols": "repeat(auto-fill, minmax(300px, 1fr))",
      }
    
    },
  },
  plugins: [],
};
