import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E3B6E", // Azul escuro
          light: "#1D4F8C",
          dark: "#092950",
        },
        secondary: {
          DEFAULT: "#E22D2D", // Vermelho
          light: "#FF3D3D",
          dark: "#C41F1F",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'about-pattern': "url('/images/about-bg.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
