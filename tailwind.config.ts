
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A1F2C",
          foreground: "#F8F9FA"
        },
        secondary: {
          DEFAULT: "#C8C8C9",
          foreground: "#1A1F2C"
        },
        accent: {
          DEFAULT: "#C17817",
          foreground: "#F8F9FA"
        },
        card: {
          DEFAULT: "#2A2F3C",
          foreground: "#F8F9FA"
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out"
      },
      boxShadow: {
        'metallic': '0 4px 6px -1px rgba(200, 200, 201, 0.1), 0 2px 4px -1px rgba(200, 200, 201, 0.06)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
