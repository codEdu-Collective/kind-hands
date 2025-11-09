import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design Colors
        primary: {
          DEFAULT: "#FF6D6D", // Primary - 01 (Kırmızı/Pembe)
          50: "#fff0f0",
          100: "#ffe0e0",
          200: "#ffc0c0",
          300: "#ff9090",
          400: "#ff6d6d",
          500: "#FF6D6D",
          600: "#e55c5c",
          700: "#cc4a4a",
          800: "#b23838",
          900: "#992626",
          950: "#7a1f1f",
        },
        accent: {
          DEFAULT: "#77D7D3", // Primary - 01 (Turkuaz/Aqua)
          50: "#e6f7f6",
          100: "#ccefef",
          200: "#99dfdf",
          300: "#77D7D3",
          400: "#77D7D3",
          500: "#77D7D3",
          600: "#6bc1bd",
          700: "#5faba7",
          800: "#539591",
          900: "#477f7b",
          950: "#3b6965",
        },
        dark: {
          DEFAULT: "#2E4049", // Primary - 01 (Koyu Mavi/Gri)
          50: "#e8ebed",
          100: "#d1d7db",
          200: "#a3afb7",
          300: "#758793",
          400: "#475f6f",
          500: "#2E4049",
          600: "#293a42",
          700: "#24333b",
          800: "#1f2d34",
          900: "#1a262d",
          950: "#151f26",
        },
        beige: {
          DEFAULT: "#F1EEEC", // Primary - 01 (Açık Bej/Krem)
          50: "#F1EEEC",
          100: "#F1EEEC",
          200: "#e8e3e0",
          300: "#dfd8d4",
          400: "#d6cdc8",
          500: "#F1EEEC",
          600: "#d4c9c3",
          700: "#c7b8b0",
          800: "#baa79d",
          900: "#ad968a",
          950: "#a08577",
        },
        light: {
          DEFAULT: "#ECF1F0", // Primary - 01 (Açık Yeşilimsi)
          50: "#ECF1F0",
          100: "#ECF1F0",
          200: "#d9e3e1",
          300: "#c6d5d2",
          400: "#b3c7c3",
          500: "#ECF1F0",
          600: "#a0b9b4",
          700: "#8daba5",
          800: "#7a9d96",
          900: "#678f87",
          950: "#548178",
        },
        gray: {
          DEFAULT: "#F2F2F2", // Primary - 01 (Açık Gri)
          50: "#F2F2F2",
          100: "#F2F2F2",
          200: "#e5e5e5",
          300: "#d8d8d8",
          400: "#cbcbcb",
          500: "#F2F2F2",
          600: "#bebebe",
          700: "#b1b1b1",
          800: "#a4a4a4",
          900: "#979797",
          950: "#8a8a8a",
        },
        neutral: {
          DEFAULT: "#727272", // Primary - 01 (Orta Gri)
          50: "#e5e5e5",
          100: "#cccccc",
          200: "#b3b3b3",
          300: "#9a9a9a",
          400: "#808080",
          500: "#727272",
          600: "#666666",
          700: "#595959",
          800: "#4d4d4d",
          900: "#404040",
          950: "#333333",
        },
        white: {
          DEFAULT: "#FFFFFF", // Primary - 01 (Beyaz)
        },
        background: "#FFFFFF",
        foreground: "#2E4049",
        muted: "#F2F2F2",
        "muted-foreground": "#727272",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
