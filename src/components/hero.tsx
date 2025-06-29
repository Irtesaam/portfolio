import { FaLocationArrow } from 'react-icons/fa'
import { RiDownloadFill } from 'react-icons/ri'
import ButtonMagic from './ui/buttons/button-magic'
import { Spotlight } from './ui/spotlight'
import TypingAnimation from './ui/typing-animation'
import Image from 'next/image'
import { DecryptedText } from './ui/decrypted-text'
import SnippetCopyButton from './ui/snippet-copy-button'

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
                className="md:hidden fixed left-0 top-0 w-full h-full object-cover opacity-0 dark:opacity-10 z-0"
                // Using position fixed causes jitter on scroll on mobile because of the viewport height change
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
                className="hidden md:block fixed left-0 top-0 w-full h-full object-cover opacity-0 dark:opacity-15 z-0"
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


            <div className='flex flex-col items-center justify-center relative z-5 my-20 mt-32'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center dark:text-blue-100 text-blue-950 max-w-80 mb-2'>Welcome to my developer portfolio</h2>
                </div>

                <DecryptedText
                    text="Hey! I am Irtesaam Atfi"
                    className="text-center text-[29px] md:text-1xl lg:text-6xl font-bold my-4"
                    duration={1200}
                />

                <div className="w-full flex justify-center">
                    <div className="text-center min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem] max-w-[90%]">
                        <TypingAnimation
                            roles={[
                                "Full-Stack MERN Developer",
                                "React Native Mobile Developer",
                                "Open Source Contributor",
                                "OSINT Researcher",
                                "I build stuff, I ship code & I explore security."
                            ]}
                            className="font-bold text-base md:text-xl lg:text-2xl font-mono text-[#b06ee9] dark:text-[#cbacf9] shadow-sm"
                            typingSpeed={60}
                            pauseDuration={1700}
                            deletingSpeed={10}
                        />
                    </div>
                </div>
                <div className='relative flex flex-wrap items-center justify-center mt-5 gap-3 z-20'>
                    <div className="flex flex-row max-[350px]:flex-col w-full max-w-xs sm:max-w-none mx-auto gap-3 items-center justify-center p-2">
                        <a href="/cv/irtesaam_atfi_resume.pdf" download className="z-20 min-w-[110px] max-w-[180px] w-full sm:w-auto sm:max-w-none">
                            <ButtonMagic
                                title="Download CV" icon={<RiDownloadFill />} position={'right'} />
                        </a>
                        <a href="#contact" className="z-20 min-w-[110px] max-w-[180px] w-full sm:w-auto sm:max-w-none">
                            <ButtonMagic
                                title="Contact Me" icon={<FaLocationArrow />} position={'right'} />
                        </a>
                    </div>
                </div>
                {/* Code Snippet */}
                <div className="flex justify-center mt-8 mb-2 w-full z-30 pointer-events-auto">
                    <div className="relative w-[80vw] sm:w-[50vw] max-w-[70rem] mx-auto">
                        <div className="flex w-full">
                            <code className="custom-scroll text-sm font-mono text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-[#020617] rounded-l-lg px-4 py-3 w-full border-r-0 border border-gray-200 dark:border-slate-800 overflow-x-auto whitespace-nowrap">
                                npx irtesaam <span className="text-gray-400 dark:text-gray-400">#Copy and hit in your terminal to connect with me</span>
                            </code>
                            <SnippetCopyButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section - Mobile Responsive */}
            <div className="absolute bottom-20 left-2 right-2 sm:bottom-14 md:bottom-8 md:left-auto md:right-8 lg:right-12 z-10">
                <div className="p-2 sm:p-4 md:p-6">

                    {/* Mobile: Horizontal layout */}
                    <div className="flex justify-between items-center gap-1 sm:gap-3 md:hidden">
                        <div className="text-center flex-1 min-w-0 overflow-hidden">
                            <div className="text-lg sm:text-xl font-bold dark:text-purple text-[#b06ee9]">10+</div>
                            <div className="text-[11px] xs:text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Projects</div>
                        </div>
                        <div className="text-center flex-1 min-w-0 overflow-hidden">
                            <div className="text-lg sm:text-xl font-bold dark:text-purple text-[#b06ee9]">80k+</div>
                            <div className="text-[11px] xs:text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Lines of Code</div>
                        </div>
                        <div className="text-center flex-1 min-w-0 overflow-hidden">
                            <div className="text-lg sm:text-xl font-bold dark:text-purple text-[#b06ee9]">1k+</div>
                            <div className="text-[11px] xs:text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Contributions</div>
                        </div>
                    </div>

                    {/* Desktop: Vertical layout */}
                    <div className="hidden md:grid grid-cols-1 gap-3 text-center">
                        <div className="flex flex-col">
                            <span className="text-2xl lg:text-3xl font-bold dark:text-purple text-[#b06ee9]">10+</span>
                            <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">Projects</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl lg:text-3xl font-bold dark:text-purple text-[#b06ee9]">80k+</span>
                            <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">Lines of Code</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl lg:text-3xl font-bold dark:text-purple text-[#b06ee9]">1k+</span>
                            <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">Contributions</span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
