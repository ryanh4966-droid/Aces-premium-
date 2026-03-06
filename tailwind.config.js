module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E50914",
          black: "#0A0A0A",
          white: "#FFFFFF"
        }
      },
      borderRadius: {
        smooth: "14px"
      }
    }
  },
  plugins: []
};
