"use client";
import ThemeToggle from "@/components/toggle-theme";
import Hero from "../components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import Projects from "@/components/projects";
import { navItems } from "@/data";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Gallery, Headings } from "@/components/gallery";
import { Contact } from "@/components/contact";
import Footer from "@/components/footer";
import { FloatingDockDemo } from "@/components/mobile-dock";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
    return (
        <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
            <SpeedInsights />
            <ThemeToggle />
            <FloatingNav navItems={navItems} className="hidden md:flex" />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Headings />
            <Gallery />
            <Contact />
            <Footer />
            <FloatingDockDemo />
        </main>
    );
}
