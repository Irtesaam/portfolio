import { FaLocationArrow } from 'react-icons/fa'
import { RiDownloadFill } from 'react-icons/ri'
import ButtonMagic from './ui/buttons/button-magic'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import TypingAnimation from './ui/typing-animation'
import Image from 'next/image'
import { DecryptedText } from './ui/decrypted-text'

export default function Hero() {
    return (
        <div className="max-w-7xl w-full pb-20 pt-0 relative mx-auto min-h-screen flex flex-col justify-center">
            {/* Background Image - Mobile Portrait */}
            <Image
                src="/hero/website_portrait.png"
                draggable={false}
                alt="hero template mobile"
                width={1080}
                height={1920}
                priority
                className="md:hidden fixed left-0 top-0 w-full h-full object-cover opacity-10 dark:opacity-35 z-0"
                style={{ inset: 0 }}
            />

            {/* Background Image - Desktop Landscape */}
            <Image
                src="/hero/website.png"
                draggable={false}
                alt="hero template desktop"
                width={1920}
                height={1080}
                priority
                className="hidden md:block fixed left-0 top-0 w-full h-full object-cover opacity-0 dark:opacity-20 z-0"
                style={{ inset: 0 }}
            />
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white" />
                <Spotlight className="-top-1- -left-full h-[80vh] w-[50vw]"
                    fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue" />
            </div>

            <div className="h-screen w-full dark:bg-grid-white/[0.02] bg-grid-black-100/[0.02] absolute top-0 left-0 flex items-center justify-center z-10">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.1))]" />
            </div>

            {/* Stats Section - Mobile Responsive */}
            <div className="absolute bottom-16 left-4 right-4 md:bottom-10 md:left-auto md:right-8 lg:right-12 z-10">
                <div className="p-6 md:p-6">
                    {/* Mobile: Horizontal layout */}
                    <div className="flex justify-between items-center gap-0 md:hidden">
                        <div className="text-center flex-1">
                            <div className="text-2xl font-bold dark:text-purple text-[#b06ee9]">500+</div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-medium">Contributions</div>
                        </div>
                        <div className="text-center flex-1">
                            <div className="text-2xl font-bold dark:text-purple text-[#b06ee9]">7+</div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-medium">Projects</div>
                        </div>
                        <div className="text-center flex-1">
                            <div className="text-2xl font-bold dark:text-purple text-[#b06ee9]">2k+</div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-medium">Hours</div>
                        </div>
                    </div>

                    {/* Desktop: Vertical layout */}
                    <div className="hidden md:grid grid-cols-1 gap-3 text-center">
                        <div className="flex flex-col">
                            <span className="text-2xl lg:text-3xl font-bold dark:text-purple text-[#b06ee9]">500+</span>
                            <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">GitHub Contributions</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl lg:text-3xl font-bold dark:text-purple text-[#b06ee9]">7+</span>
                            <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">Projects Completed</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl lg:text-3xl font-bold dark:text-purple text-[#b06ee9]">2k+</span>
                            <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">Hours Worked</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center relative z-5 my-20 mt-32'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center dark:text-blue-100 text-blue-950 max-w-80 mb-2'>Welcome to my portfolio website</h2>
                </div>

                <DecryptedText
                    text="Hi! I am Irtesaam Atfi"
                    className="text-center text-[32px] md:text-5xl lg:text-7xl font-bold my-4"
                    duration={1200}
                />

                {/* <TextGenerateEffect
                    words="Hi! I am Irtesaam Atfi"
                    className="text-center text-[40px] md:text-5xl lg:text-7xl"
                /> */}

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
                    <TypingAnimation
                        roles={[
                            "Full-Stack MERN & React-Native Developer",
                            "Street & Travel Photographer",
                            "InfoSec Explorer & OSINT Enthusiast"
                        ]}
                        className="font-medium"
                        typingSpeed={80}
                        pauseDuration={1500}
                        deletingSpeed={40}
                    />
                </p>
                <div className='relative flex items-center justify-center mt-10 space-x-4 z-20'>
                    <a href="/cv/irtesaam_atfi_resume.pdf" download className="z-20">
                        <ButtonMagic
                            title="Download CV" icon={<RiDownloadFill />} position={'right'} />
                    </a>
                    <a href="#contact" className="z-20">
                        <ButtonMagic
                            title="Contact Me" icon={<FaLocationArrow />} position={'right'} />
                    </a>
                </div>
            </div>
        </div>
    )
}
