import React from "react";
import { FaHome, FaRegNewspaper, FaInstagram, FaHeart } from "react-icons/fa";

export default function SnapsNavbar() {
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(true);
    const lastScroll = React.useRef(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll <= 0) {
                setShow(true);
                lastScroll.current = 0;
                return;
            }
            if (currentScroll > lastScroll.current) {
                setShow(false); // scrolling down
            } else {
                setShow(true); // scrolling up
            }
            lastScroll.current = currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full z-50 sticky top-0 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} pointer-events-auto bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-black/80 dark:via-black/85 dark:to-black/80 py-2 sm:py-4`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 relative">
                {/* Left: Menu Links */}
                <div className="flex items-center gap-2 md:gap-6">
                    <button
                        className="md:hidden p-2 rounded-full bg-white/0 dark:bg-black/0 border-0 shadow-none"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Open navigation menu"
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        className={`hidden md:flex flex-row items-center gap-6 transition-all duration-300`}
                    >
                        <li className="flex flex-col items-center">
                            <a href="#snaps-hero" aria-label="Home" className="font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition">
                                <FaHome className="w-5 h-5" />
                            </a>
                            <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">Home</span>
                        </li>
                    </ul>
                    {/* Mobile menu dropdown */}
                    <ul
                        className={`flex flex-col md:hidden absolute left-4 right-4 top-16 z-40 bg-white/90 dark:bg-black/90 rounded-2xl px-4 py-4 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${open ? '' : 'hidden'}`}
                    >
                        <li className="flex flex-col items-center">
                            <a href="#snaps-hero" aria-label="Home" className="font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition">
                                <FaHome className="w-5 h-5" />
                            </a>
                            <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">Home</span>
                        </li>
                        <li className="flex flex-col items-center">
                            <span className="font-semibold text-gray-700 dark:text-gray-300 cursor-default" aria-label="Blogs">
                                <FaRegNewspaper className="w-5 h-5" />
                            </span>
                            <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">Blogs</span>
                        </li>
                    </ul>
                </div>
                {/* Center: Logo/Brand - responsive position */}
                <div className="relative pl-4 flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:pl-0 md:pointer-events-none select-none">
                    <img
                        src="/snaps/irtesnaps.png"
                        alt="irtesnaps logo"
                        className="h-16 sm:h-20 w-56 object-contain drop-shadow-xl rounded-2xl bg-transparent p-0 transition-all duration-300"
                        style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}
                    />
                </div>
                {/* Right: Icons */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.instagram.com/irte.snaps"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Support / Donate"
                        className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition"
                    >
                        <FaHeart className="w-5 h-5 text-red-500 dark:text-red-400" />
                    </a>
                    <a
                        href="https://www.instagram.com/irte.snaps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        <FaInstagram className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
