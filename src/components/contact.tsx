"use client";
import React from "react";
import {
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import ButtonMagic from "./ui/buttons/button-magic";

export function Contact() {
    const iconSize = 18;
    return (
        <div className='py-20' id='contact'>
            <h1 className='heading px-5'>
                <span className='dark:text-purple text-[#b06ee9]'>$</span>
                {' '}ping
            </h1>
            <div className="flex flex-col items-center w-full px-2 mt-10">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[40rem] mx-auto'>
                    <a href="mailto:atfimdirtesaam@gmail.com" target="__blank" rel="noopener noreferrer">
                        <ButtonMagic title="Email" icon={<IconBrandGmail size={iconSize} />} position="right" />
                    </a>
                    <a href="https://linkedin.com/in/irtesaam" target="__blank" rel="noopener noreferrer">
                        <ButtonMagic
                            title="LinkedIn" icon={<IconBrandLinkedin size={iconSize} />} position={'right'} />
                    </a>
                    <a href="https://github.com/irtesaam" target="__blank" rel="noopener noreferrer">
                        <ButtonMagic
                            title="GitHub" icon={<IconBrandGithub size={iconSize} />} position={'right'} />
                    </a>
                    <a href="https://instagram.com/irte.snaps" target="__blank" rel="noopener noreferrer">
                        <ButtonMagic
                            title="Instagram" icon={<IconBrandInstagram size={iconSize} style={{ minWidth: iconSize, minHeight: iconSize }} />} position={'right'} />
                    </a>
                </div>
            </div>
        </div>
    );
}
