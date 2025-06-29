import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/toggle-theme";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
    ssr: false,
});

export default function SplashDialog() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Globe config and data
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 7, startLat: 52.52, startLng: 13.405, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 8, startLat: -8.833221, startLng: 13.264837, endLat: -33.936138, endLng: 18.436529, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 8, startLat: 1.3521, startLng: 103.8198, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 9, startLat: 51.5072, startLng: -0.1276, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 9, startLat: 22.3193, startLng: 114.1694, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.7, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 9, startLat: 1.3521, startLng: 103.8198, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.5, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 10, startLat: -22.9068, startLng: -43.1729, endLat: 28.6139, endLng: 77.209, arcAlt: 0.7, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 10, startLat: 34.0522, startLng: -118.2437, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 10, startLat: -6.2088, startLng: 106.8456, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 11, startLat: 41.9028, startLng: 12.4964, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 11, startLat: -6.2088, startLng: 106.8456, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 11, startLat: 22.3193, startLng: 114.1694, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 12, startLat: 34.0522, startLng: -118.2437, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 12, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 12, startLat: 22.3193, startLng: 114.1694, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 13, startLat: 52.52, startLng: 13.405, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 13, startLat: 11.986597, startLng: 8.571831, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 13, startLat: -22.9068, startLng: -43.1729, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
        { order: 14, startLat: -33.936138, startLng: 18.436529, endLat: 21.395643, endLng: 39.883798, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
    ];

    return (
        <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen w-full overflow-hidden">
            {/* Theme toggle */}
            <div className="absolute top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            {/* Left splash card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="z-30 p-6 sm:p-10 mt-20 md:mt-0 rounded-3xl shadow-xl backdrop-blur-xl
                       bg-white/80 dark:bg-white/5 transition-all duration-700 ease-out transform
                       w-full max-w-md md:w-[40%] mx-4"
            >
                <h1 className="text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-tr from-blue-600 via-pink-800 to-purple-600 bg-clip-text text-transparent">
                    Welcome to my Matrix
                </h1>

                <p className="mt-4 text-sm text-[#b06ee9] tracking-wide uppercase font-mono animate-pulse">
                    Red pill or blue pill?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
                    <Link href="/snaps" passHref>
                        <button className="w-full sm:w-auto px-6 py-3 bg-pink-600 text-white rounded-xl text-base font-semibold hover:bg-pink-700 hover:scale-105 transition-transform duration-200">
                            Photography Portfolio
                        </button>
                    </Link>
                    <Link href="/dev" passHref>
                        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl text-base font-semibold hover:bg-blue-700 hover:scale-105 transition-transform duration-200">
                            Developer Portfolio
                        </button>
                    </Link>
                </div>
            </motion.div>

            {/* Globe on right or below on mobile */}
            <div className="relative z-10 w-full h-[300px] md:h-full md:w-[60%] pointer-events-auto mt-10 md:mt-0">
                <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
        </div>
    );

}
