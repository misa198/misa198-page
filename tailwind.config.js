module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 133, 121)',
      },
      textColor: {
        primary: 'rgba(0, 2, 4, 0.8)',
        highlight: 'rgb(0, 133, 121)',
        secondary: 'rgba(0, 2, 4, 0.5)',
      },
      animation: {
        'fade-in': 'fade-in 300ms',
        'fade-out': 'fade-out 300ms',
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
  plugins: [],
};
