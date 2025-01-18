'use client';

import React from 'react'
import Image from "next/image";
// import { color } from 'framer-motion';

export default function Heading() {
    return (
        <div>
            <div className='absolute inset-0 z-0'>
                <Image src={'/projects/bg.webp'} alt={''} width={1920} height={1080} layout={'responsive'} />
            </div>
            <div className='flex justify-end mr-5 mt-5 mb-2 inset-0'>
                <button className="flex items-end justify-end border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200 dark:hover:bg-white/[0.1]"
                onClick={() => alert('Login feature is not available yet!')}
                >
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
            </div>

            {/* <div className='flex items-center justify-center relative z-5 my-5'>
                <div className='max-w-[89vm] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h1 className='heading tracking-widest text-xs text-center dark:text-blue-100 text-blue-950 max-w-100'>memories <span className='dark:text-purple text-[#b06ee9]'>never fade</span></h1>
                </div>
            </div> */}
        </div>
    )
}
