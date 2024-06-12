import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      nav: "#DEDBEF",
      "nav-button": "#F6C33A",
      "nav-text": "#101828",
      footer: "#000000",
      "footer-text": "#6F6F6F",
      white: "#ffffff",
      "default-border": "#CFCFCF",
      "body-text": "#475467",
      "card-text": "#909090",
      mail: "#EB631D",
      coral: "#1F2342",
      "your-nft": "#F3F5F8",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
