const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: path.join(__dirname),
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.svgrepo.com",
            },
            {
                protocol: "https",
                hostname: "upload.vectorlogo.zone",
            },
            {
                protocol: "https",
                hostname: "cdn.worldvectorlogo.com",
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
            },
            {
                protocol: "https",
                hostname: "eydbdcpzzsmvggpnjhjm.supabase.co",
            },
            {
                protocol: "https",
                hostname: "gravatar.com",
            },
            {
                protocol: "https",
                hostname: "secure.gravatar.com",
            },
        ],
    },
}

module.exports = nextConfig
