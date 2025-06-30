"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import "./irtesaam-artistic-font.css";

// Hook to detect mobile
function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return isMobile;
}

export default function Heading({ galleryRef }: { galleryRef: React.RefObject<HTMLDivElement> }) {
    const isMobile = useIsMobile();
    const ref = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Opacity of overlay
    const overlayOpacity = useTransform(
        scrollYProgress,
        isMobile ? [0.0, 0.6, 1] : [0.0, 0.7],
        isMobile ? [0.0, 0.02, 0.04] : [0.3, 0.6]
    );




    // Fade out heading content
    const opacity = useTransform(
        scrollYProgress,
        isMobile ? [0, 0.6, 1] : [0, 0.4, 0.7],
        isMobile ? [1, 0.6, 0] : [1, 0, 0]
    );


    const handleArrowClick = () => {
        if (galleryRef?.current) {
            galleryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="snaps-hero" ref={ref} className="relative min-h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center">
            {/* Background Image and Overlay */}
            <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 z-0">
                <Image
                    src="/projects/bg.webp"
                    alt=""
                    width={1920}
                    height={1080}
                    priority
                    className="w-full h-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-black/80 dark:via-black/60 dark:to-black/80" />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 flex flex-col md:flex-row items-center justify-center w-[95vw] max-w-4xl px-2 sm:w-[90vw] sm:px-4 py-4 md:py-16 gap-8 md:gap-16"
            >
                {/* Profile Image */}
                <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg bg-white/80 dark:bg-black/80 border-4 border-purple-300 dark:border-purple-700 md:ml-[-40px] ml-0">
                    <Image
                        src="/about/ab1.webp"
                        alt="Irtesaam Atfi"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        priority
                        draggable={false}
                        onContextMenu={e => e.preventDefault()}
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-widest text-black dark:text-white drop-shadow-lg mb-2 font-[Pacifico]" style={{ fontFamily: 'Pacifico, cursive', fontWeight: 400 }}>
                        Irtesaam Atfi
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-gray-900 dark:text-gray-300 w-full max-w-md font-[Quicksand]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        I’m a photographer based in India, exploring <span className="text-slate-600 dark:text-slate-300 font-semibold">street, travel, and landscape</span> photography over the past 4 years. My work revolves around cinematic composition, lighting, and capturing the mood of each place I step into.

                        What began as a casual interest has evolved into something I truly value. For me, photography isn’t just about the view — it’s about perspective. Though I now shoot with a <span className="text-slate-600 dark:text-slate-300 font-semibold">Canon 200D II</span> — typically using a 50mm prime for streets, and an 18–55mm for wider shots — most of the images on this site were originally captured on my phone, Realme GT Neo 2.
                        That’s where it all began.

                        This portfolio reflects an ongoing journey — testing ideas, sharpening my eye, and figuring out what makes an image feel right. Four years in, and I’m still grateful photography found me when it did.
                    </p>
                </div>
            </motion.div>

            {/* Down Arrow */}
            <button
                onClick={handleArrowClick}
                className="absolute bottom-[6rem] md:bottom-[6rem] left-1/2 -translate-x-1/2 z-20 rounded-full p-2 bg-white/70 dark:bg-black/70 transition pointer-events-auto"
                aria-label="Scroll to gallery image section"
            >
                <div className="w-[42px] h-[42px] flex items-center justify-center">
                    <Image
                        src="/snaps/down-arrow.png"
                        alt="Down Arrow"
                        width={30}
                        height={30}
                        className="animate-bounce dark:invert block"
                        unoptimized
                    />
                </div>
            </button>

            <ScrollToTopButton />
            <div className="h-[20vh] w-full" />
        </div>
    );
}

// Scroll to Top Button
function ScrollToTopButton() {
    const [visible, setVisible] = React.useState(false);
    const lastScrollY = React.useRef(0);
    const [show, setShow] = React.useState(true);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    React.useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    setVisible(currentY > (isMobile ? 80 : 200));
                    if (currentY < 40) {
                        setShow(true);
                    } else if (currentY > lastScrollY.current) {
                        setShow(false); // scrolling down
                    } else if (currentY < lastScrollY.current) {
                        setShow(true); // scrolling up
                    }
                    lastScrollY.current = currentY;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isMobile]);

    if (!visible) return null;

    return (
        <button
            style={{ position: 'fixed', bottom: 20, right: 20, transition: 'opacity 0.3s', opacity: show ? 1 : 0, pointerEvents: show ? 'auto' : 'none', zIndex: 50 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/80 dark:bg-black/80 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-black"
            aria-label="Scroll to top"
        >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" /></svg>
        </button>
    );
}
