/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00f3ff',
        'neon-purple': '#b026ff',
        'matrix-green': '#00ff41',
        'dark-bg': '#0a0a0f',
        'glass-bg': 'rgba(16, 16, 24, 0.6)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 243, 255, 0.4)',
        'glow-purple': '0 0 15px rgba(176, 38, 255, 0.4)',
        'glow-green': '0 0 15px rgba(0, 255, 65, 0.4)',
        'glow-cyan-lg': '0 0 25px rgba(0, 243, 255, 0.6)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
