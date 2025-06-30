"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const ThemeToggle = ({ floating = false }: { floating?: boolean }) => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !resolvedTheme) return null;

    const commonClasses = "p-2 rounded-full transition duration-300 transform hover:scale-110 focus:outline-none";
    const themeClasses = "bg-slate-200 dark:bg-slate-900 dark:hover:bg-black hover:bg-white";

    const positionClasses = floating
        ? "fixed top-5 right-5 z-50"
        : "";

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={`${commonClasses} ${themeClasses} ${positionClasses}`}
            aria-label="Toggle Theme"
        >
            {resolvedTheme === "dark" ? (
                <FaMoon className="text-blue-800" size={20} />
            ) : (
                <FaSun className="text-amber-500" size={20} />
            )}
        </button>
    );
};

export default ThemeToggle;
