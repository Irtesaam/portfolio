"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import "./irtesaam-artistic-font.css";

export default function Heading({ galleryRef }: { galleryRef: React.RefObject<HTMLDivElement> }) {
    // Scroll-based animation logic
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    // Fade out text as soon as scrolling starts, fully hidden before image section arrives
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0, 0]);

    // Handler for arrow click to scroll to image section
    const handleArrowClick = () => {
        if (galleryRef?.current) {
            galleryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="snaps-hero" ref={ref} className="relative min-h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center">
            {/* Full-height Background Blur/Overlay */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.7], [0.3, 1]) }}
                className="absolute inset-0 z-0"
            >
                <Image src={'/projects/bg.webp'} alt={''} width={1920} height={1080} priority className="w-full h-full object-cover blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-black/80 dark:via-black/60 dark:to-black/80" />
            </motion.div>
            {/* Modern Hero Section: Image left, Text right */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 flex flex-col md:flex-row items-center justify-center w-[95vw] max-w-4xl px-2 sm:w-[90vw] sm:px-4 py-4 md:py-16 gap-8 md:gap-16"
            >
                {/* Left: Profile Image */}
                <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg bg-white/80 dark:bg-black/80 border-4 border-purple-300 dark:border-purple-700 md:ml-[-40px] ml-0">
                    <Image src="/about/ab1.webp" alt="Irtesaam Atfi" width={400} height={400} className="object-cover w-full h-full" priority />
                </div>
                {/* Right: Name and Description */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-widest text-black dark:text-white drop-shadow-lg mb-2 font-[Pacifico]" style={{ fontFamily: 'Pacifico, cursive', fontWeight: 400 }}>
                        Irtesaam Atfi
                    </h1>
                    <p className="mt-2 text-sm xs:text-base md:text-lg text-gray-700 dark:text-gray-300 w-full max-w-md font-[Quicksand]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        I’m a photographer and student based in India, drawn to capturing honest, unscripted moments. My style blends street, portrait, and documentary photography, with a focus on mood, emotion, and natural light. Whether it’s gritty city textures or quiet, candid expressions, I aim for authenticity over perfection.

                        All the images on this site come from my travels — raw, personal, and unplanned. Every shot is a reflection of what I’ve seen and felt along the way. I shoot with a Canon 200D II, using an 18–55mm kit lens and a 50mm prime — lightweight, versatile, and perfect for the way I work.


                    </p>
                </div>
            </motion.div>
            {/* Downward Arrow Icon */}
            <button
                onClick={handleArrowClick}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 rounded-full p-2 shadow-lg transition pointer-events-auto bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
                aria-label="Scroll to gallery image section"
            >
                <Image
                    src="/snaps/down-arrow.png"
                    alt="Down Arrow"
                    width={42}
                    height={42}
                    className="invert dark:invert-0 animate-bounce"
                    style={{ filter: 'invert(1)' }}
                />
            </button>
            {/* Scroll to Top Button */}
            <ScrollToTopButton />
            {/* Spacer to allow scrolling past fixed heading */}
            <div className="h-[20vh] w-full" />
        </div>
    );
}

// Scroll to Top Button component
function ScrollToTopButton() {
    const [visible, setVisible] = React.useState(false);
    const lastScrollY = React.useRef(0);
    const [show, setShow] = React.useState(true);
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
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
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
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
