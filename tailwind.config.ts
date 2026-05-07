import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    screens: {
      tablet: { min: "768px", max: "991px" },
      desktop: { min: "992px" }
    },
    extend: {
      colors: {
        canvas: "#ffffff",
        ink: "#111111",
        "ink-soft": "rgba(18, 18, 18, 0.8)",
        line: "#bababa40",
        mist: "#f7f7f7",
        accent: "#000000",
        "accent-dark": "#000000"
      },
      fontFamily: {
        body: "var(--font-aeonik), Inter, Arial, sans-serif",
        display: "var(--font-aeonik), Inter, Arial, sans-serif"
      },
      boxShadow: {
        button:
          "inset 0 4px 4px 0 rgba(255, 255, 255, 0.2), inset 4px 0 4px 0 rgba(255, 255, 255, 0.2), inset 0 -4px 4px 0 rgba(255, 255, 255, 0.2), inset -4px 0 4px 0 rgba(255, 255, 255, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
