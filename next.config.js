/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: true,

    i18n
};

module.exports = nextConfig;
