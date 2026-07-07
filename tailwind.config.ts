import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        limitless: {
          black: "#050505",
          blue: "#0A84FF",
          panel: "rgba(255,255,255,0.07)",
          line: "rgba(255,255,255,0.14)",
        },
      },
      boxShadow: {
        glow: "0 0 42px rgba(10,132,255,0.28)",
        panel: "0 24px 90px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
      keyframes: {
        circuit: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-120px, 80px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.34" },
          "50%": { opacity: "0.68" },
        },
      },
      animation: {
        circuit: "circuit 22s linear infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
      opacity: {
        6: "0.06",
        7: "0.07",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        65: "0.65",
        68: "0.68",
        72: "0.72",
        78: "0.78",
      },
    },
  },
  plugins: [],
};

export default config;
