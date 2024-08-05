/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    // basePath: '/multi-step-form',
    // assetPrefix: '/multi-step-form/',
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
