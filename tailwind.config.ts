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
    fontSize: {
      "3xs": "clamp(0.65rem, 0.064vw + 0.60rem, 0.69rem)",
      "2xs": "clamp(0.69rem, 0.072vw + 0.68rem, 0.72rem)",
      xs: "clamp(0.75rem, 0.077vw + 0.73rem, 0.78rem)",
      sm: "clamp(0.8rem, 0.08vw + 0.78rem, 0.84rem)",
      base: "clamp(1rem, 0.21vw + 0.92rem, 1.13rem)",
      md: "clamp(1.25rem, 0.45vw + 1.14rem, 1.5rem)",
      lg: "clamp(1.56rem, 0.79vw + 1.36rem, 2rem)",
      xl: "clamp(1.95rem, 1.29vw + 1.63rem, 2.66rem)",
      "2xl": "clamp(2.44rem, 2.02vw + 1.94rem, 3.55rem)",
      "3xl": "clamp(3.05rem, 3.06vw + 2.29rem, 4.73rem)",
    },
    extend: {
      keyframes: {
        "gradient-move": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        "gradient-move": "gradient-move 5s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
