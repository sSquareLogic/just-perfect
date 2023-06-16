import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        GREEN: "#BEFA1B",
        GREEN_HOVER: "#98c815",
        BLACK: "#2D2D2D",
        GRAY: "#6A6A6A",
        WHITE: "#FFFFFF",
        BG: "#F6F6F6",
      },
      backgroundImage: {
        DARKEN: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
      },
      fontSize: {
        TITLE: "40px",
        SM_TITLE: "32px",
        LG_TEXT: "24px",
        TEXT: "18px",
        SM_TEXT: "16px",
        XS_TEXT: "14px",
      },
      fontFamily: {
        RW: ["var(--font-rw)", ...fontFamily.sans],
        GR: ["var(--font-gr)", ...fontFamily.sans],
      },
      gridTemplateRows: {
        HERO_HORIZONTAL: "1fr 1fr",
      },
      gridTemplateColumns: {
        HEADER: "1fr 410px 1fr",
        FOOTER: "auto 410px",
        HERO: "1fr 1fr",
        TWO_FR: "repeat(2, 1fr)",
        THREE_FR: "repeat(3, 1fr)",
        FOUR_FR: "repeat(4, 1fr)",
      },
      boxShadow: {
        CARD: "0px 4px 16px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
