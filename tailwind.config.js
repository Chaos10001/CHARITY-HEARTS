/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#D8D7FC",
        primary: "#0E0B9D",
        footerColor: "#282828",
        aboutColor: "#B1AFF9",
        graytext: "#81809E",
        deepPurple: "#5E5CBD",
        lighgrey: "#41405A",
      },
    },
  },
  plugins: [],
};
