/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/upload',
                destination: 'http://134.102.202.239:5000/upload',
            }, {
                source: '/api/marigold',
                destination: 'http://134.102.202.239:5000/marigold',
            }
        ];
    },
}
