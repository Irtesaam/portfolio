import { useRef, useState, ReactNode, MouseEvent, useEffect } from "react";

type SpotlightCardProps = {
    children: ReactNode;
    className?: string;
};

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x, y });
    };

    const handleMouseLeave = () => {
        setCoords(null);
    };

    useEffect(() => {
        // Detect dark mode
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const spotlightColor = isDarkMode
        ? "rgba(255,255,255,0.4)"  // bright in dark
        : "rgba(0,0,0,0.08)";       // dark subtle shadow in light


    return (
        <div
            ref={divRef}
            tabIndex={0}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`border border-[#d1d5db] dark:border-[#222] rounded-3xl p-8 overflow-hidden bg-[#f3f4f6] dark:bg-[#04071c] relative ${className}`}
            style={{ position: "relative" }}
        >
            <>
                {/* Black spotlight for light mode */}
                <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-full transition-opacity duration-300 dark:hidden"
                    style={{
                        opacity: coords ? 1 : 0,
                        background: coords
                            ? `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(0, 0, 0, 0.2), transparent 70%)`
                            : undefined,
                        filter: "blur(100px) contrast(1.2)",
                        zIndex: 1,
                        mixBlendMode: "multiply",
                    }}
                />
                {/* White spotlight for dark mode */}
                {/* Enhanced white spotlight for dark mode */}
                <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-full transition-opacity duration-300 hidden dark:block"
                    style={{
                        opacity: coords ? 1 : 0,
                        background: coords
                            ? `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.13), transparent 60%)`
                            : undefined,
                        filter: "blur(10px) saturate(1.2)",
                        zIndex: 1,
                        mixBlendMode: "screen",
                    }}
                />

            </>

            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default SpotlightCard;
