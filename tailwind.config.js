/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EC',
        paper: '#FFFFFF',
        beige: '#E8DFD1',
        clay: '#D8CBB4',
        ink: '#111111',
        charcoal: '#2B2B2B',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      fontSize: {
        hero: 'clamp(3.5rem, 9vw, 9rem)',
        spread: 'clamp(2.5rem, 6vw, 5.5rem)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
