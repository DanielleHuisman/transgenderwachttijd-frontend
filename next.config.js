const {i18n} = import('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    i18n
};

module.exports = nextConfig;
