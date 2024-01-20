/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
