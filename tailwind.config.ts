import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        highlight: "var(--highlight)",

        color: "var(--color)",
        color2: "var(--color2)",
        color3: "var(--color3)",
        color4: "var(--color4)",
        color5: "var(--color5)",
      },
      text: {
        title1: "var(--title-1)",
        title2: "var(--title-2)",
        subtitle: "var(--subtitle)",
        buttonPrimary: "var(--button-primary)",
      }
    },
  },
  plugins: [],
};

export default config;
