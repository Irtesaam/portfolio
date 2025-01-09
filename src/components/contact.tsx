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
    return (
        <div className='py-20' id='contact'>
            <h1 className='heading px-5'>
                Contact {' '}
                <span className='dark:text-purple text-[#b06ee9]'>Me</span>
            </h1>
            <div className='relative flex sm:flex-row flex-col sm:space-y-0 space-y-2 items-center justify-center mt-10 space-x-4'>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=atfimdirtesaam@gmail.com" target="__blank" rel="noopener noreferrer" className="pl-3 sm:pl-0">
                    <ButtonMagic
                        title="Gmail" icon={<IconBrandGmail />} position={'right'} />
                </a>
                <a href="https://linkedin.com/in/irtesaam" target="__blank" rel="noopener noreferrer">
                    <ButtonMagic
                        title="LinkedIn" icon={<IconBrandLinkedin />} position={'right'} />
                </a>
                <a href="https://instagram.com/irte.snaps" target="__blank" rel="noopener noreferrer">
                    <ButtonMagic
                        title="Instagram" icon={<IconBrandInstagram />} position={'right'} />
                </a>
                <a href="https://github.com/irtesaam" target="__blank" rel="noopener noreferrer">
                    <ButtonMagic
                        title="GitHub" icon={<IconBrandGithub />} position={'right'} />
                </a>
            </div>

        </div>
    );
}
