import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0A0A0A",
          card: "#1A1A1A",
          deep: "#0F0F0F",
        },
        border: {
          DEFAULT: "#2A2A2A",
          muted: "#1F1F1F",
        },
        accent: {
          teal: "#00CEC9",
          "teal-deep": "#0E9F9A",
          sepia: "#D4A574",
          "sepia-muted": "#9C7F5E",
          gold: "#FFD700",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          soft: "#E0E0E0",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "65ch",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 600ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
