/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/upload',
                destination: 'https://dynamic-202-239.informatik.uni-bremen.de:5000/upload',
            }, {
                source: '/api/marigold',
                destination: 'https://dynamic-202-239.informatik.uni-bremen.de:5000/marigold',
            }, {
                source: '/api/marigold/layer',
                destination: 'https://dynamic-202-239.informatik.uni-bremen.de:5000/marigold/layer',
            },
        ];
    },
}
