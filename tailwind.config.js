/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      transitionTimingFunction: {
        "in-quad": `cubic-bezier(0.11, 0, 0.5, 0)`,
        "out-quad": `cubic-bezier(0.5, 1, 0.89, 1)`,
        "in-out-quad": `cubic-bezier(0.45, 0, 0.55, 1)`,
        "in-cubic": `cubic-bezier(0.32, 0, 0.67, 0)`,
        "out-cubic": `cubic-bezier(0.33, 1, 0.68, 1)`,
        "in-out-cubic": `cubic-bezier(0.65, 0, 0.35, 1)`,
        "in-quart": `cubic-bezier(0.5, 0, 0.75, 0)`,
        "out-quart": `cubic-bezier(0.25, 1, 0.5, 1)`,
        "in-out-quart": `cubic-bezier(0.76, 0, 0.24, 1)`,
        "in-expo": `cubic-bezier(0.7, 0, 0.84, 0)`,
        "out-expo": `cubic-bezier(0.16, 1, 0.3, 1)`,
        "in-out-expo": `cubic-bezier(0.87, 0, 0.13, 1)`,
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
