/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'card-bg': '#1e293b',
        'accent-yellow': '#fbbf24',
        'muted-text': '#94a3b8',
        'border-color': '#334155',
      },
      borderRadius: {
        'xl': '24px',
      }
    },
  },
  plugins: [],
}
