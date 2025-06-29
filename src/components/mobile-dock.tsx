'use client';

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconFileCv,
    IconHome,
    IconMessages,
    IconTerminal2,
    IconUser,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Experience",
            icon: (
                <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#experience",
        },

        {
            title: "Contact",
            icon: (
                <IconMessages className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#contact",
        },
    ];
    return (
        <div className="fixed left-0 top-0 bottom-10 flex items-center justify-center z-20">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
