"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    // autoplay = true,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    // useEffect(() => {
    //     if (autoplay) {
    //         const interval = setInterval(handleNext, 1000);
    //         return () => clearInterval(interval);
    //     }
    // }, [autoplay, handleNext]);

    const randomRotateY = (index: number) => {
        const values = [-6, -3, 0, 3, 6]; // Predefined deterministic values
        return values[index % values.length]; // Rotate based on the index
    };

    return (
        <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 pt-20 pb-10">
            <div className="relative grid md:grid-cols-2 grid-cols-1 gap-10">
                <div>
                    <div className="relative aspect-[4/5] sm:aspect-[1/1] md:aspect-[2/3] lg:aspect-[4/5] xl:aspect-[1/1] w-full max-w-[360px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] mx-auto rounded-3xl">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(index),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(index),
                                        zIndex: isActive(index)
                                            ? 10
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(index),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        fill // maintains aspect ratio
                                        priority={index === 0} // Enable eager loading for the first image to reduce LCP
                                        draggable={false}
                                        className="pointer-events-none select-none h-full w-full object-cover object-center rounded-3xl"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex justify-between flex-col pt-1">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="text-2xl font-bold dark:text-white text-black">
                                {testimonials[active].name}
                            </h3>

                            <div className="flex gap-2 mr-4"> {/* Adjust margin here */}
                                <button
                                    onClick={handlePrev}
                                    className="h-8 w-8 rounded-full bg-[#e2e8f0] dark:bg-[#0f172a] border flex items-center justify-center group/button"
                                >
                                    <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="h-8 w-8 rounded-full bg-[#e2e8f0] dark:bg-[#0f172a] border flex items-center justify-center group/button"
                                >
                                    <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>


                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="text-lg text-gray-600 mt-8 dark:text-white-200">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
