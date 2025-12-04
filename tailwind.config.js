/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0D0D0D",       // dark background color
        primary: "#6C5CE7",    // purple (for gradients, buttons, highlight)
        accent: "#A166FF",     // soft purple (for gradient blend)
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
