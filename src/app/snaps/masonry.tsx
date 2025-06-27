'use client';

import Image from 'next/image';
import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { images } from './data';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ImageMasonry() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    // Add index state for navigation
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Helper to open image and set index
    const openImage = (idx: number) => {
        setSelectedIndex(idx);
    };

    // Handlers for next/prev
    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };
    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    if (!mounted) return null;

    return (
        <>
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl mt-8 mb-4 text-center text-gray-800 dark:text-gray-200" style={{ fontFamily: 'Lobster, cursive', fontWeight: 400, letterSpacing: '0.04em' }}>My Collections</div>
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-lg z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Backward Icon */}
                        <button
                            className="absolute left-8 md:left-20 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 z-50"
                            onClick={handlePrev}
                            disabled={selectedIndex === 0}
                            style={{ opacity: selectedIndex === 0 ? 0.3 : 1 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        {/* Image */}
                        <motion.img
                            src={images[selectedIndex].src}
                            alt="Preview"
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-white/20"
                            initial={{ scale: 1 }}
                            animate={{ scale: 0.95 }}
                            exit={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            draggable={false}
                            onContextMenu={e => e.preventDefault()}
                        />
                        {/* Forward Icon */}
                        <button
                            className="absolute right-8 md:right-20 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 z-50"
                            onClick={handleNext}
                            disabled={selectedIndex === images.length - 1}
                            style={{ opacity: selectedIndex === images.length - 1 ? 0.3 : 1 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                        {/* Location Bar in Modal */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-base px-4 py-2 rounded-full font-semibold shadow-lg pointer-events-none">
                            <svg className="inline-block mr-1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1 1 16 0c0 4.97-3.582 9-8 9zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                            {images[selectedIndex].location || 'India'}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Box
                sx={{
                    padding: isSmallScreen ? '0.2rem' : '0.5rem',
                    width: '100%',
                    maxWidth: isSmallScreen ? '25rem' : '100rem',
                    margin: '0 auto',
                }}
                className="flex justify-center items-center">
                <Masonry columns={isSmallScreen ? 2 : 4} spacing={2}>
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/70 dark:bg-black/40 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex items-center justify-center relative group"
                        >
                            <Image
                                src={item.src.replace('/upload/', '/upload/q_40/')} // Cloudinary quality param
                                alt="Image"
                                width={400}
                                height={500}
                                className="rounded-xl object-cover w-full h-auto transition duration-300 hover:brightness-110"
                                draggable={false}
                                onClick={() => openImage(index)}
                                onContextMenu={e => e.preventDefault()}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="/snaps/placeholder.webp" // Optional: add a local blur placeholder
                            />
                            {/* Location Bar - show on hover only */}
                            <div
                                className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-xs sm:text-sm px-2 py-1 sm:py-2 font-semibold tracking-wide rounded-b-2xl flex items-center justify-start gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                style={{ pointerEvents: 'none' }}
                            >
                                <svg className="inline-block mr-1" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1 1 16 0c0 4.97-3.582 9-8 9zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                                {item.location || 'India'}
                            </div>
                        </div>
                    ))}
                </Masonry>
            </Box>
        </>
    );
}
