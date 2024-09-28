import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#1D252B",
      light: "#F6F3EC",
      transparent: "#FFFFFF00",
      "primary-blue": "#487ADA",
    },
    fontFamily: {
      integral: ["var(--font-integral-cf)", "sans-serif"],
      geist: ["var(--font-geist-sans)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
