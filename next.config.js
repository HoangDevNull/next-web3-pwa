const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withTM = require('next-transpile-modules')([]);
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = withPlugins(
  [
    [withTM, {}],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: process.env.NODE_ENV === 'development',
        },
      },
    ],
  ],
  {
    i18n,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }
);
