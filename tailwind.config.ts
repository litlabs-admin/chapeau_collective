import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
        accent: "#0F6F78",
        "accent-dark": "#0B4F5C",
        "accent-soft": "#E7F4F5",
        "accent-secondary": "#FF5A1F"
      },
      borderRadius: {
        pill: "999px",
        shell: "20px"
      },
      fontFamily: {
        body: "var(--font-aeonik), Inter, Arial, sans-serif",
        display: "var(--font-aeonik), Inter, Arial, sans-serif",
        instrument: "var(--font-aeonik), Inter, Arial, sans-serif"
      },
      boxShadow: {
        shell:
          "0 0.602px 1.565px -1.5px rgba(0, 0, 0, 0.17), 0 2.289px 5.95px -3px rgba(0, 0, 0, 0.14), 0 10px 26px -4.5px rgba(0, 0, 0, 0.02)",
        button: "inset 0 4px 4px 0 rgba(255, 255, 255, 0.2), inset 4px 0 4px 0 rgba(255, 255, 255, 0.2), inset 0 -4px 4px 0 rgba(255, 255, 255, 0.2), inset -4px 0 4px 0 rgba(255, 255, 255, 0.2)"
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(140deg, rgba(15,111,120,0.92) 0%, rgba(15,111,120,0.72) 38%, rgba(17,17,17,0.32) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
