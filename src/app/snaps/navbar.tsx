"use client";
import { useEffect, useState, useRef } from "react";
import { FaInstagram, FaHeart } from "react-icons/fa";
import ThemeToggle from "@/components/toggle-theme";

export default function SnapsNavbar() {
    const [show, setShow] = useState(true);
    const lastScroll = useRef(0);
    const [liked, setLiked] = useState(false);
    const [animate, setAnimate] = useState(false);

    // Load saved like state
    useEffect(() => {
        const saved = localStorage.getItem("heart-liked");
        if (saved === "true") {
            setLiked(true);
        } else {
            setAnimate(true);
            const timeout = setTimeout(() => setAnimate(false), 1000); // blink duration
            return () => clearTimeout(timeout);
        }
    }, []);

    const handleClick = () => {
        setLiked(true);
        localStorage.setItem("heart-liked", "true");
    };

    // Hide navbar on scroll down
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setShow(currentScroll < lastScroll.current || currentScroll <= 0);
            lastScroll.current = currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full z-50 sticky top-0 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} pointer-events-auto bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-black/95 dark:via-black/90 dark:to-black/95 py-2 sm:py-4`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 relative">
                {/* Invisible spacer to balance center logo */}
                <div className="w-[80px] hidden md:block" />

                {/* Center Logo */}
                <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 select-none z-10">
                    <img
                        src="/snaps/irtesnaps.png"
                        alt="irtesnaps logo"
                        className="h-16 sm:h-20 w-30 object-contain drop-shadow-xl rounded-2xl bg-transparent invert dark:invert-0"
                    />
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-1 ml-auto z-10">
                    <button
                        aria-label="Like"
                        onClick={handleClick}
                        className={`p-2 rounded-full transition ${animate ? "animate-ping-short" : ""}`}
                    >
                        <FaHeart
                            className={`w-5 h-5 transition-colors duration-300 ${liked ? "text-red-500" : "text-white"}`}
                        />
                    </button>

                    <a
                        href="https://www.instagram.com/irte.snaps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        <FaInstagram className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </a>

                    <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        <ThemeToggle floating={false} />
                    </div>

                </div>

            </div>
        </nav>
    );
}
