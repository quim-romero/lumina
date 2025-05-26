import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
        "3xl": "1600px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Unbounded", "cursive"],
      },
      colors: {
        brand: "#EAB308",
        "brand-dark": "#CA8A04",
        background: "#F9F5EC",
        surface: "#FFFDF5",
        muted: "#78716C",
        dark: "#1C1917",
        light: "#FFFBEB",
        accent: "#A3E635",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};

export default config;
