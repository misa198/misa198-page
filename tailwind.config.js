/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
      },
      colors: {
        primary: 'rgb(0, 133, 121)',
      },
      textColor: {
        primary: 'rgba(0, 2, 4, 0.8)',
        highlight: 'rgb(0, 133, 121)',
        secondary: 'rgba(0, 2, 4, 0.5)',
      },
      animation: {
        fadeIn: 'fadeIn 300ms',
        fadeOut: 'fadeOut 300ms',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
      transitionProperty: {
        all: 'all',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
