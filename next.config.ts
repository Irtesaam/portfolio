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
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
            },
        ],
         domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    },
};

export default nextConfig;

module.exports = nextConfig;
