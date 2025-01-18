import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from "next/image";

export default function Projects() {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading px-5'>
                Recent {' '}
                <span className='dark:text-purple text-[#b06ee9]'> Projects</span>
            </h1>
            <div className='flex flex-wrap justify-center items-center p-4 gap-x-24'>
                {projects.map(({ id, title, des, img, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[90vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-gray-300 dark:bg-black-200'>
                                    <Image src="/projects/bg.webp" alt="bg-img" width={400} height={200} />
                                </div>
                                <Image
                                    src={img}
                                    alt={title}
                                    width={400}
                                    height={200}
                                    className='z-5 absolute bottom-0 h-60 w-80 transform' style={{ rotate: '5deg' }} />
                            </div>
                            <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-lg lg:font-normal font-light line-clamp-2 md:text-base text-sm'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                {/* <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black w-8 h-8 justify-center items-center flex' style={{
                                            transform: `translateX(-${5 * index *  2}px)`}}>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div> */}
                                <div className='flex justify-center items-center dark:text-purple text-[#b06ee9] lg:text-sm md:text-xs text-xs'>
                                    <p className='flex'>Visit GitHub Repo</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}
