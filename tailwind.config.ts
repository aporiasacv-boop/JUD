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
        judey: {
          navy: "#062C43",
          blue: "#0A3A57",
          gold: "#D7C29A",
          cream: "#F5F1E8",
          muted: "#A9B4C2",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 48px -12px rgba(6, 44, 67, 0.45)",
        glow: "0 0 0 1px rgba(215, 194, 154, 0.12), 0 18px 40px -16px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "grain-soft":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(215, 194, 154, 0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(10, 58, 87, 0.6) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
