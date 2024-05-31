/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-logos": {
          to: { transform: "translateX(calc(-50% - 2rem))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "slide-logos": "slide-logos 15s linear infinite",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-infinito": "scroll-infinito 25s reverse linear infinite",
      },
    },
  },
  plugins: [],
};
