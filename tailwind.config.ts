import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          yellow: "#FBC02D",
          orange: "#FB8C00",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        backgroundColors: {
          white: "#FFFFFF",
          pale: "#FFFDE7",
        },
        text: {
          charcoal: "#212121",
          gray: "#757575",
        },
        dark: {
          bg: "#0F0F0F",
          card: "#1A1A1A",
          text: "#FFFFFF",
          muted: "#A0A0A0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        bounceInDrop: {
          "0%": { transform: "translateY(-200%)", opacity: "0" },
          "60%": { transform: "translateY(20%)", opacity: "1" },
          "80%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        zoom: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(255, 193, 7, 0.4)" },
          "50%": { boxShadow: "0 0 28px rgba(255, 193, 7, 0.6)" },
        },
        slideUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        scrollLinear: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 20px rgba(251, 192, 45, 0.4)" },
          "100%": { boxShadow: "0 0 30px rgba(251, 192, 45, 0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-horizontal": "scrollLinear 25s linear infinite",
        float: "float 4s ease-in-out infinite",
        zoom: "zoom 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        gradient: "gradient 6s ease infinite",
        "bounce-in-drop": "bounceInDrop 1s cubic-bezier(0.25, 1.25, 0.5, 1.0) both",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      boxShadow: {
        "glow-yellow": "0 0 20px rgba(251, 192, 45, 0.3)",
        "glow-orange": "0 0 20px rgba(251, 140, 0, 0.3)",
        neumorphic: "8px 8px 20px #e0e0e0, -8px -8px 20px #ffffff",
        "neumorphic-inset": "inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff",
        "neumorphic-inner": "inset 4px 4px 8px #dcdcdc, inset -4px -4px 8px #ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
