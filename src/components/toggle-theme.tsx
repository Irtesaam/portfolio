"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures hydration has completed
  }, []);

  if (!mounted || !resolvedTheme) {
    return null; // Prevent rendering until hydration is done to avoid incorrect initial theme flicker
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed top-5 right-5 z-50 p-2 rounded-full bg-slate-200 dark:bg-slate-900 dark:hover:bg-black-500 hover:bg-white-500 transition duration-700 transform hover:scale-110 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <FaMoon className="text-blue-800" size={24} />
      ) : (
        <FaSun className="text-amber-500" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
