import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function Experience() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        This year marked my deep dive into system-level programming, where I began exploring the inner workings of the Linux OS and kernel interfaces. Motivated by the lack of support for my laptop’s proprietary features on Linux, I started reverse engineering PredatorSense Acer’s Windows utility to build a native Linux alternative. This project sharpened my understanding of C Programming, hardware-level abstraction, and the Linux device driver model. It also sparked my growing interest in firmware analysis and reverse engineering closed-source binaries to give Linux users better control over their own hardware.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/experience/e7.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/experience/e6.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Participated as Open-Source Contributor in{" "}<span className="font-bold">GSSoC Ext, Hacktoberfest and WoB. </span> Contributed to several projects based on MERN Stack by raising 33PRs and achieved <span className="font-bold">74th rank</span> at the end of GSSoC event. This particular experience helped me to learn about the importance of Open Source Softwares and how it can help in building a better community and since then I have been exploring various Open Source projects like Brave Browser, Gnome-extensions, etc.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/experience/e1.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/experience/e2.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Having gained some experience with the Linux OS, I begin to explore the field of InfoSec and started learning about{" "}Offensive and Defensive Security. The fields which were really interesting to me were <span className="font-bold">Malware Analysis</span> and <span className="font-bold">Penetration Testing.</span>{" "}This journey not only deepened my technical expertise but also instilled in me a problem-solving mindset and the counterintuitive approach of breaching the security to secure digital assets. Since then, I have been sharpening my skills through TryHackMe rooms, solving OTW Bandits and reading about OWASP Top 10 vulnerabilities in depth.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/experience/e3.webp"
                            draggable={false}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />

                        <Image
                            src="/experience/e4.webp"
                            draggable={false}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className='py-10' id='experience'>
            <h1 className='heading'>
                <span className='dark:text-purple text-[#b06ee9]'>$</span>
                {' '}history
                {/* journalctl --user */}
            </h1>
            <div className="w-[88vw] py-10">
                <Timeline data={data} />
            </div>
        </div>
    );
}
