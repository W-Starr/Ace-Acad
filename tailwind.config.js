module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Tailwind's blue-500 (similar to your Figma)
      },
    },
  },
  // ... rest of your config
}