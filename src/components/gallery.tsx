"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";


export function Gallery() {
    return (
        <div className='flex flex-col sm:flex-row gap-5'>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Landscape Photography
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        Where every frame is a postcard from heaven.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/gallery/g1.jpeg"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            draggable={false}
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://instagram.com/irte.snaps"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            See more →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="/second-page"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            View All
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
                <CardBody className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Street Photography
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        The streets speak, I simply listen through my lens.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/gallery/g2.jpeg"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            draggable={false}
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://instagram.com/irte.snaps"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            See more →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="/second-page"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            View All
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
                <CardBody className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Travel Photography
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        Every journey is a story, immortalized in a shot
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/gallery/g3.jpeg"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            draggable="false"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://instagram.com/irte.snaps"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            See more →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="/second-page"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            View All
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    );
}

export function Headings() {
    return (
        <div className='py-20 flex flex-col' id='gallery'>
            <h1 className='heading'>
                My {' '}
                <span className='dark:text-purple text-[#b06ee9]'>Gallery</span>
            </h1>
        </div>
    );

}
