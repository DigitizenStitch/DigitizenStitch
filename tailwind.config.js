/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand foundation (original navy) ...
        navy: {
          50: '#eef2ff', 100: '#dbe4ff', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
          500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
        },
        // ... deepened for a premium dark canvas
        ink: { DEFAULT: '#070b1f', 900: '#0b1130', 800: '#111a44', 700: '#1a2558' },
        paper: '#f6f5f1',
        // Complementary accents
        thread: { DEFAULT: '#e9b872', light: '#f6dcae', deep: '#b9853f' }, // champagne gold
        signal: { DEFAULT: '#2dd4bf', light: '#99f6e4', deep: '#0d9488' }, // tech teal
        orchid: { DEFAULT: '#a78bfa', deep: '#7c3aed' }, // violet
        coral: '#fb7185',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(7,11,31,.05), 0 10px 30px -12px rgba(7,11,31,.18)',
        lift: '0 2px 6px rgba(7,11,31,.08), 0 30px 60px -20px rgba(7,11,31,.45)',
        glow: '0 0 0 1px rgba(233,184,114,.25), 0 20px 60px -15px rgba(233,184,114,.35)',
        'glow-teal': '0 0 0 1px rgba(45,212,191,.25), 0 20px 60px -15px rgba(45,212,191,.3)',
      },
      transitionTimingFunction: { premium: 'cubic-bezier(.2,.7,.2,1)' },
      backgroundImage: {
        'gold-text': 'linear-gradient(100deg,#f6dcae 0%,#e9b872 40%,#fff1d6 55%,#e9b872 70%,#b9853f 100%)',
      },
    },
  },
  plugins: [],
};
