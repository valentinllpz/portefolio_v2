/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#20282E",
      light: "#F6F3EC",
      transparent: "#FFFFFF00",
      "primary-blue": "#487ADA",
    },
    fontFamily: {
      rand: ["var(--font-rand)"],
      microgramma: ["var(--font-microgramma)"],
      sohneBreit: ["var(--font-sohneBreit)"],
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
        reveal: {
          "0%": {
            "transform-style": "preserve-3d",
            "transform-origin": "left",
            "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            transform: "translate(0%, 25%)",
          },
          "100%": {
            "transform-style": "preserve-3d",
            "transform-origin": "left",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            transform: "translate(0%, 0%)",
          },
        },
        slideUp: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            transform: "translateY(5%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        pulse: {
          "0% 100%": {
            opacity: "5%",
          },
          "50%": {
            opacity: 0,
          },
        },
      },
      animation: {
        reveal: "reveal 2s cubic-bezier(.23, 1, .32, 1) forwards",
        slideUp: "slideUp 1.2s cubic-bezier(.43,.25,.21,.83) forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
