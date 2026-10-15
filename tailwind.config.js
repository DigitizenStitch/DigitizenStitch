/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Brand palette: the original navy (blue-950/900) foundation with slate neutrals.
      colors: {
        navy: {
          50: '#eef2ff',
          100: '#dbe4ff',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
          ink: '#0f1a3d',
        },
        ivory: '#f8f8f6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,26,61,.04), 0 8px 24px -8px rgba(15,26,61,.12)',
        lift: '0 2px 4px rgba(15,26,61,.06), 0 24px 48px -16px rgba(15,26,61,.28)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(.2,.7,.2,1)',
      },
    },
  },
  plugins: [],
};
