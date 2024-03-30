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
            },
            {
                protocol: 'https',
                hostname: 'gravatar.com'
            }
        ],
    },
};

module.exports = nextConfig;
