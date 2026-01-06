import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenLight: "var(--green-light)",
        greenDark: "var(--green-dark)",
        greyText: "var(--grey-text)",
      },
      fontFamily: {
        octopost: ["var(--font-octopost)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
