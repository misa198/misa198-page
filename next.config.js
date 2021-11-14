/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')({
  options: {},
});

module.exports = removeImports({
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: true,
  },
});
