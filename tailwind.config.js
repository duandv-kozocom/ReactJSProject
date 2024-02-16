/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#337ab7',
          first: '#2e6da4',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
        },
        gray: {
          DEFAULT: '#ccc',
          first: '#B7C5CE',
        },
      },
      borderRadius: {
        none: '0',
        DEFAULT: '8px',
      },
      boxShadow: {
        DEFAULT: 'rgba(0,0,0,0.25) 0 1px 0, inset rgba(255,255,255,0.16) 0 1px 0',
        first: '0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset',
        second: '0px 0px 6px rgba(87, 104, 116, 0.3)',
      },
      fontSize: {
        DEFAULT: ['14px', '20px'],
        first: ['12px', '18px'],
        h1: '36px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
