
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--border) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        'engine-black': '#2C2C2C',
        'metallic-grey': '#A9A9A9',
        'chrome-silver': '#C0C0C0',
        'racing-red': '#FF2E2E',
        'neon-blue': '#00BFFF',
        'performance-yellow': '#FFD700',
        'dark-asphalt': '#121212',
        'dark-asphalt-light': '#1F1F1F',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'titillium': ['"Titillium Web"', 'sans-serif'],
      },
      backgroundImage: {
        'carbon-fiber': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        'blueprint': "url('https://www.transparenttextures.com/patterns/blueprint-grid.png')",
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        revEngine: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        pistonMove: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'pulse': 'pulse 2s ease-in-out infinite',
        'rev-engine': 'revEngine 1s ease-in-out infinite',
        'piston-move': 'pistonMove 1s ease-in-out infinite',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.neon-blue"), 0 0 20px theme("colors.neon-blue")',
        'red-glow': '0 0 5px theme("colors.racing-red"), 0 0 20px theme("colors.racing-red")',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
