/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Red — primary brand (Birlasoft-style)
        brand: {
          50:  '#fff0f2',
          100: '#ffdde2',
          200: '#ffb3be',
          300: '#ff7a90',
          400: '#ff3355',
          500: '#E31837',
          600: '#c0142e',
          700: '#9e1126',
          800: '#7d0e1e',
          900: '#5c0915',
        },
        // Orange — secondary accent
        accent: {
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        // Surface tokens — light-first
        surface: {
          900: 'rgb(var(--surface-900) / <alpha-value>)',
          800: 'rgb(var(--surface-800) / <alpha-value>)',
          700: 'rgb(var(--surface-700) / <alpha-value>)',
          600: 'rgb(var(--surface-600) / <alpha-value>)',
          500: 'rgb(var(--surface-500) / <alpha-value>)',
          400: 'rgb(var(--surface-400) / <alpha-value>)',
        },
        // Corp colors for explicit usage
        corp: {
          dark:  '#0A0A0F',
          navy:  '#0F1117',
          white: '#FFFFFF',
          light: '#F4F6F9',
          gray:  '#E5E7EB',
        },
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'marquee':    'marquee 28s linear infinite',
        'slide-up':   'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-150%) skewX(-12deg)' },
          '100%': { transform: 'translateX(350%) skewX(-12deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
    },
  },
  plugins: [],
}
