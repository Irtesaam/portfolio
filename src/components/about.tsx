
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function About() {
    const testimonials = [
        {
            quote:
                "I am a final-year B.Tech student at NIT Hamirpur with a background in Civil Engineering, but my work and aspirations have always belonged to the world of computing. Today, I build secure full-stack web & mobile applications and contribute to open-source projects. Committed to continuous learning, I’m actively transitioning into the IT industry with a long-term focus on Penetration Testing.",
            name: "Overview",
            designation: "B.Tech (2022-Present)",
            src: "/about/ab1.webp",
        },
        {
            quote:
                "As a Full-Stack Developer, I work across both web and mobile apps focusing on performance and clean design. I have hands-on experience with the MERN stack, Next.js, and React Native, and I'm adept at debugging issues. I actively contribute to open-source events like Hacktoberfest and GSSoC, and my portfolio reflects a balance of creativity and code for seamless user experiences across devices.",
            name: "Developer",
            designation: "Web & Mobile Apps",
            src: "/about/ab2.webp",
        },
        {
            quote:
                "What started as a casual interest has evolved into something I truly cherish, making the most of every moment I dedicate to it. My knack for timing the shot with precision and the keen eye for composition have cultivated a strong sense of patience and focus within me. Three years in, and I still feel grateful that photography found me when it did. To see more of my work, head over to the Gallery section of this page.",
            name: "Photographer",
            designation: "Canon 200D II",
            src: "/about/ab3.webp",
        },
        {
            quote:
                "The human ingenuity of teaching a rock to think has always fascinated me — but what excites me even more is the challenge of bending it to my will. This curiosity fuels my exploration of Open Source Intelligence, Malware Analysis, Reverse Engineering, and Information Security as a whole which I deep-dive into through Linux-based virtual environments using QEMU-KVM or VMware.",
            name: "InfoSec",
            designation: "Penetration Testing",
            src: "/about/ab4.webp",
        },
        {
            quote:
                "There’s a 'Bunny' buried in all of us — a wild, restless spark waiting to roam free. For me, travel became its outlet. I’ve wandered through over 10 Indian states and 20+ cities, capturing everything from serene landscape to the pulse of streets through my lens. Each journey tells a story, but Kashmir will always be the prologue — my first escape, and the one that changed me forever.",
            name: "Traveller",
            designation: "The Best of my hobby",
            src: "/about/ab5.webp",
        },
        {
            quote:
                "I use an Acer Predator Helios Neo 16 powered by an i7-13700HX, 16GB RAM, and an RTX 4050 (6GB), with dual storage — 1TB internal and 1TB external SSD — to support both my development work and photography needs. It's dual-booted with Ubuntu 24.10 alongside Windows 11. A blog page is coming soon, where I’ll be writing about both digital and travel adventures.",
            name: "Workstation",
            designation: "My Setup",
            src: "/about/ab6.webp",
        },
    ];
    return (
        <div className='py-20 mt-20' id='about'>
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
