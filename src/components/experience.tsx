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
                        This year, I began exploring <span className="font-bold">System-level programming</span> with a focus on the Linux OS and kernel interfaces. While researching ways to control RGB lighting on my Predator laptop, I discovered a reverse-engineered Linux alternative to the PredatorSense app. Fascinated by the work, I cloned the repo to study its internals and was deeply inspired by the possibilities of <span className="font-bold">reverse engineering</span>. Despite having no prior experience with Kernel interfaces or device drivers, I began customizing the tool for personal use—an effort that deepened my interest in low-level systems and hardware control.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/experience/e6.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="pointer-events-none select-none rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/experience/e5.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="pointer-events-none select-none rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
                        Participated as Open-Source Contributor in{" "}<span className="font-bold">GSSoC Ext, Hacktoberfest and WoB. </span> Contributed to several projects based on MERN Stack by raising 33PRs and secured <span className="font-bold">74th rank</span> at the event. This experience introduced me to the world of open source and its role in building developer communities. I’ve since then explored larger codebases, including reporting an issue to the <span className="font-bold">Brave Browser</span> repository. While I couldn’t fully complete the project setup to solve the issue on my own, the process gave me valuable insight into the complexity of large-scale open source projects.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/experience/e1.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="pointer-events-none select-none rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/experience/e2.webp"
                            draggable={false}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="pointer-events-none select-none rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
                        After gaining hands-on experience with Linux, I began exploring the field of InfoSec and was especially drawn to <span className="font-bold">Malware Analysis</span> and <span className="font-bold">Penetration Testing.</span>{" "}This journey not only deepened my technical understanding but also nurtured a problem-solving mindset built on unconventional thinking. Since then, I’ve been actively sharpening my skills through TryHackMe labs, OverTheWire Bandit challenges, and OSINT. I also completed the <span className="font-bold">Google Cybersecurity Certificate</span> on Coursera and an <span className="font-bold">Ethical Hacking Bootcamp</span> on Udemy to strengthen my foundational knowledge and practical skills.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/experience/e3.webp"
                            draggable={false}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="pointer-events-none select-none rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />

                        <Image
                            src="/experience/e4.webp"
                            draggable={false}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="pointer-events-none select-none rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
            </h1>
            <div className="w-[88vw] py-10">
                <Timeline data={data} />
            </div>
        </div>
    );
}
