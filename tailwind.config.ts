import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bagroundLigth: "#fffff",
        textgray: "#666e7a",
        textlight: "#0a0a0a",

        bagroundDark: "#0f0f10",
        bagroundDarkPlus: "#0a0a0a",
        textDark: "#fffff",

        rojo: "#d50101",
        verde: "#006f03",
      },
    },
  },
  plugins: [],
};
export default config;
