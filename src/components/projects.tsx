import { projects } from '@/data'
import React, { useState } from 'react'
import SpotlightCard from './ui/spotlight-card'
import { FaLocationArrow, FaLinux, FaPython, FaRust, FaDocker, FaBootstrap, FaHtml5 } from 'react-icons/fa';
import { VscTerminalBash } from 'react-icons/vsc';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiReact, SiFramer, SiRedux } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { AiFillOpenAI } from 'react-icons/ai';

const iconMap = {
    FaLinux,
    VscTerminalBash,
    FaPython,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiReact,
    SiFramer,
    TbBrandReactNative,
    SiRedux,
    IoLogoFirebase,
    AiFillOpenAI,
    FaRust,
    FaDocker,
    IoLogoJavascript,
    FaBootstrap,
    FaHtml5,
};

export default function Projects() {
    const [status, setStatus] = useState('completed');
    const options = ['completed', 'upcoming'];
    return (
        <div className='py-20' id='projects'>
            <div className="flex items-center justify-center px-5 mb-2">
                <h1 className='heading w-full text-center'>
                    <span className='dark:text-purple text-[#b06ee9]'>$</span>
                    {' '}ls ~/projects
                </h1>
            </div>
            <div className="flex px-5 mb-8 w-full pointer-events-auto z-40 relative
                sm:justify-end
                justify-center
                mt-8
                md:mt-6
                md:pr-10
            ">
                <select
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    className="pointer-events-auto z-40 relative rounded-xl border ring-1 border-[#3B3F54] dark:bg-[#04071c] bg-[#f3f4f6] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#898B98] transition-colors duration-200 dark:text-white text-[#b06ee9] shadow-md"
                >
                    {options.map(option => (
                        <option key={option} value={option} className="dark:bg-[#04071c] bg-[#f3f4f6] text-[#b06ee9] dark:text-white">
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 p-20 justify-items-center">
                {projects.filter(project => project.status === status).map(({ id, title, des, img, link, iconLists }) => (
                    <div key={id} className='flex items-center justify-center sm:w-[460px] w-[90vw] m-0'>
                        <SpotlightCard>
                            {/* Removed images here */}
                            <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1 mb-2'>
                                {title}
                            </h1>
                            <p className='lg:text-md lg:font-normal font-light line-clamp-3 md:text-base text-sm'>
                                {des}
                            </p>
                            {/* Place the link and icons in a row, icons on the right */}
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center dark:text-purple text-[#b06ee9] lg:text-sm md:text-xs text-xs'
                                >
                                    <span>Visit GitHub Repo</span>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </a>
                                {/* Icons on the right, much smaller, with safe gap */}
                                <div className='flex gap-3 ms-6'>
                                    {iconLists && iconLists.map((iconName: string, idx: number) => {
                                        const Icon = iconMap[iconName as keyof typeof iconMap];
                                        return Icon ? <Icon key={idx} size={14} className='text-black dark:text-white' /> : null;
                                    })}
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                ))}
            </div>
        </div>
    )
}
