"use client";
import ThemeToggle from "@/components/toggle-theme";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import { FloatingDockDemo } from "@/components/mobile-dock";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SplashDialog from "@/components/ui/SplashDialog";

export default function Home() {
    return (
        <main className="relative dark:bg-black bg-white flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
            <SpeedInsights />
            <ThemeToggle />
            <FloatingNav navItems={navItems} className="hidden md:flex" />
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
                <SplashDialog />
            </div>
            <FloatingDockDemo />
        </main>
    );
}
