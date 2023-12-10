/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cgrey: "#333333",
        caccent: "#e67e22",
        chighlights: "#ffffff"
      },
    },
  },
  plugins: [],
};
