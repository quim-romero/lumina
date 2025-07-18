import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px", "3xl": "1600px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Unbounded", "cursive"],
      },
      colors: {
        brand: "#EAB308",
        "brand-dark": "#CA8A04",
        "brand-700": "#B45309",
        background: "#F9F5EC",
        surface: "#FFFDF5",
        muted: "hsl(var(--muted) / <alpha-value>)",
        dark: "#1C1917",
        light: "#FFFBEB",
        border: "#E7E5E4",
      },
    },
  },
  plugins: [forms, typography, animate],
};

export default config;
