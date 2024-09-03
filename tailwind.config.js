/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        white: "#fff",
        "blue-light": "#0E86D4",
        "light-grey": "#D3D3D3",
      },
    },
  },
  plugins: [],
};
