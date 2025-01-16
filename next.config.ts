// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   hostname: "assets.aceternity.com",
// };

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: {
        appIsrStatus: false,
    },
    images: {
        domains: ['res.cloudinary.com', 'images.unsplash.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
            },
        ],
    },
};

export default nextConfig;

module.exports = nextConfig;
