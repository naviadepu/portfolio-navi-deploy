import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['Courier New', 'Courier', 'monospace'],  // Classic typewriter style
        plex: ['IBM Plex Mono', 'monospace'],            // Modern monospaced
        space: ['Space Mono', 'monospace'],              // Retro aesthetic
      },
    },
  },
  plugins: [],
} satisfies Config;
