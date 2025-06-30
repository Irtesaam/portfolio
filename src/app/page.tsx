"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackgroundBoxes } from "@/components/ui/welcome-page";

export default function Home() {
    return (
        <main className="relative dark:bg-black bg-white flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
            <SpeedInsights />
            <BackgroundBoxes />
        </main>
    );
}
