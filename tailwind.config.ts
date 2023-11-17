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
        primary: "#21C063",
        background: "#0B141A",
        text: "#E9EDEF",
        "input-bg": "#1E1E1E",
        "input-placeholder": "#8696A0",
      },
    },
  },
  plugins: [],
};
export default config;
