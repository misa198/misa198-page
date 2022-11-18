export default defineNuxtConfig({
  css: ["~/assets/styles/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
