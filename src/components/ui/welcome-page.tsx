"use client";
import React from "react";
import { Boxes } from "./bg-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function BackgroundBoxes() {
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex items-center justify-center px-6">
            {/* Boxes background */}
            <div className="absolute inset-0 z-0">
                <Boxes />
            </div>

            {/* Content layer */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={cn(
                        "text-3xl md:text-6xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500 tracking-widest font-mono"
                    )}
                >
                    WELCOME TO THE MATRIX
                </motion.h1>

                <p className="mt-5 text-neutral-300 text-center text-base md:text-lg leading-relaxed font-mono">
                    <code className="text-[#3471d6] font-semibold">Blue</code> reveals how I think.
                    <br />
                    <code className="text-[#d23956] font-semibold">Red</code> reveals how I see.
                    <br />
                    <span className="text-neutral-300 font-medium">
                        The choice is yours{"..."}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0, duration: 0.01 }}
                            className="inline-block"
                        >
                            <span className="typing text-white font-bold">
                                or is it<span className="blinking-cursor">{" "}?</span>
                            </span>
                        </motion.span>
                    </span>
                </p>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                    className="mt-10 w-full flex justify-center"
                >
                    <LinkPreviewDemo />
                </motion.div>

            </div>
        </div>
    );
}

export function LinkPreviewDemo() {
    return (
        <div className="font-serif flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-neutral-300">
            <LinkPreview
                url="https://irtesnaps.in/dev"
                className="w-40 text-center px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-transform"
            >
                Dev Portfolio
            </LinkPreview>
            <span className="text-md md:text-base text-neutral-500">or</span>
            <LinkPreview
                url="https://irtesnaps.in/snaps"
                className="w-40 text-center px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 hover:scale-110 transition-transform shadow-md shadow-rose-800/30"
            >
                Snaps Portfolio
            </LinkPreview>
        </div>


    );
}
