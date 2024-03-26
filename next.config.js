/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.svgrepo.com'
            },
            {
                protocol: 'https',
                hostname: 'upload.vectorlogo.zone'
            },
            {
                protocol: 'https',
                hostname: 'ylqsckbdlzupaourzvtf.supabase.co'
            }
        ],
    },
};

module.exports = nextConfig;
