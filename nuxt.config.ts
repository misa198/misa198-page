import head from './constants/head';

export default defineNuxtConfig({
  app: {
    head,
  },
  css: ['~/assets/styles/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
