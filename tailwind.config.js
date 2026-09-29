/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: 'rgb(var(--color-ivory) / <alpha-value>)',
          soft: 'rgb(var(--color-ivory-soft) / <alpha-value>)',
        },
        charcoal: {
          DEFAULT: 'rgb(var(--color-charcoal) / <alpha-value>)',
          soft: 'rgb(var(--color-charcoal-soft) / <alpha-value>)',
        },
        terracotta: {
          DEFAULT: 'rgb(var(--color-terracotta) / <alpha-value>)',
          dark: 'rgb(var(--color-terracotta-dark) / <alpha-value>)',
          light: 'rgb(var(--color-terracotta-light) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--color-gold) / <alpha-value>)',
          soft: 'rgb(var(--color-gold-soft) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif Devanagari"', 'Georgia', 'serif'],
        sans: ['"Work Sans"', '"Noto Sans Devanagari"', '"Noto Sans Kannada"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        content: '440px',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(36, 31, 28, 0.12)',
        floating: '0 8px 30px -6px rgba(36, 31, 28, 0.22)',
      },
    },
  },
  plugins: [],
}
