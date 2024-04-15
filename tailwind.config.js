/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: {
        900: "#171717",
      },
      brown: {
        50: "#fdf8f6",
        100: "#f2e8e5",
        200: "#eaddd7",
        300: "#e0cec7",
        400: "#d2bab0",
        500: "#bfa094",
        600: "#a18072",
        700: "#977669",
        800: "#846358",
        900: "#483732",
        950: "#1B1513",
      },
      red: {
        500: "#E72929",
      },
      extend: {},
    },
    plugins: [],
  },
};
