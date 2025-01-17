import { FaLocationArrow } from 'react-icons/fa'
import { RiDownloadFill } from 'react-icons/ri'
import ButtonMagic from './ui/buttons/button-magic'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'

export default function Hero() {
    return (
        <div className='max-w-7xl w-full pb-20 pt-36'>
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white" />
                <Spotlight className="-top-1 0 -left-full h-[80vh] w-[50vw]"
                    fill="purple " />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex flex-col items-center justify-center relative z-5 my-20'>
                <div className='max-w-[89vm] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center dark:text-blue-100 text-blue-950 max-w-80'>Welcome to my portfolio website</h2>
                </div>

                <TextGenerateEffect
                    words="Hi! I am Irtesaam Atfi"
                    className="text-center text-[40px] md:text-5xl lg:text-7xl"
                    // Instead of this heavy JS in initial load, we can use a simple CSS styling to reduce LCP
                />

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
                    Web Developer, UI/UX Designer, Travel Photographer, and an InfoSec Enthusiast
                </p>
                <div className='relative flex items-center justify-center mt-10 space-x-4'>
                    <a href="/cv/irtesaam_atfi_resume.pdf" download>
                        <ButtonMagic
                            title="Download CV" icon={<RiDownloadFill />} position={'right'} />
                    </a>
                    <a href="#contact">
                        <ButtonMagic
                            title="Contact Me" icon={<FaLocationArrow />} position={'right'} />
                    </a>
                </div>
            </div>
        </div>
    )
}
