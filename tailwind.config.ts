import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#214696",
        accent: "#F4C430",
        background: "#FFFFFF",
        "light-bg": "#F8FAFC",
        "dark-text": "#1F2937",
        "muted-text": "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;