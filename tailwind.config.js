/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class", // 👈 Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#0C1639",
      },
    },
  },
  plugins: [],
};
