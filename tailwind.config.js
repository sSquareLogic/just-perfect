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
        BLACK: "#2D2D2D",
        GRAY: "#6A6A6A",
        WHITE: "#FFFFFF",
        BG: "#F6F6F6",
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
    },
  },
  plugins: [],
};
