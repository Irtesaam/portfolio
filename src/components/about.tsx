
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function About() {
    const testimonials = [
        {
            quote:
                "I am currently a Pre-final year student pursuing Bachelor's in Civil Engineering at National Institute of Technology, Hamirpur. Wanna know more about me ? Slide to next ...                                                                                                                                                                                                                                                                                                                                                                         ",
            name: "Education",
            designation: "2022-present",
            src: "/about/ab1.webp",
        },
        {
            quote:
                "As a Frontend Developer, my work lies at the intersection of design and development. I have experience with Next.js and MERN Stack, and is adept at debugging issues and implementing innovative solutions. My portfolio highlights my ability to combine creativity with technical skills, ensuring a seamless user experience.",
            name: "Web Developer",
            designation: "MERN Stack",
            src: "/about/ab2.webp",
        },
        {
            quote:
                "What started as a casual interest has evolved into something I truly cherish, making the most of every moment I dedicate to it. My knack for timing the shot with precision and the keen eye for composition have cultivated a strong sense of patience and focus within me. Three years on, and I remain in debt of Photography for choosing me.",
            name: "Photographer",
            designation: "Canon 200D II",
            src: "/about/ab3.webp",
        },
        {
            quote:
                "The human ingenuity of teaching a rock to think has always sparked my curiosity but what excites me even more is the idea of bending it to my will. This fascination extends to my work with Linux OS in VMs where I actively explore topics like Open Source Intelligence, Malwares Analysis, Reverse engineering or Information Security in general.",
            name: "InfoSec",
            designation: "Penetration Testing",
            src: "/about/ab4.webp",
        },
        {
            quote:
                "Each of us has a 'Bunny' somewhere deep within, but only a few have the courage to set it free. With that said, I have been to over 10 Indian States and 20+ cities capturing serene landscape and restless streets of our country. However, the place that holds a special place in my heart is Kashmir — the very first trip I ever took, and that changed me forever.",
            name: "Traveller",
            designation: "The Best of my hobby",
            src: "/about/ab5.webp",
        },
        {
            quote:
                "I have Acer Predator Helios Neo 16 with i7-13700HX, 16GB RAM, 6GB Nvidia RTX 4050, 1TB SSD, 1TB external SSD (photographer needs ?) and its dual booted with Ubuntu 24.04 alongside Windows 11. I always love to tweak the system settings and try out new things. My Blog page will be added soon where you can read about my digital adventures.",
            name: "Random Fact",
            designation: "My System Setup",
            src: "/about/ab6.webp",
        },
    ];
    return (
        <div className='py-20' id='about'>
            <h1 className='heading'>
                About {' '}
                <span className='dark:text-purple text-[#b06ee9]'>Me</span>
            </h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>

    );
}


{/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
<p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w">
    The human ingenuity of <span className="italic" >teaching a rock to think</span> has always sparked my curiosity but what excites me even more is the idea of bending it to my will. This fueled my passion for Penetration Testing and I have been on a journey to explore it ever since.
</p>
</div> */}
