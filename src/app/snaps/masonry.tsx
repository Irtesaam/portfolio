'use client';

import Image from 'next/image';
import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { images } from './data';
import { useTheme } from '@mui/material/styles';
// import { Paper, styled } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Snap3DCardDemo from './Snap3DCardDemo'; // Import the Snap3DCardDemo component here

// import { ClassNames } from '@emotion/react';

// const Label = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(0.5),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//     }),
//   }));

export default function ImageMasonry() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    // Add index state for navigation
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Helper to open image and set index
    const openImage = (item: string, idx: number) => {
        setSelectedImage(item);
        setSelectedIndex(idx);
    };

    // Handlers for next/prev
    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedIndex > 0) {
            setSelectedImage(images[selectedIndex - 1]);
            setSelectedIndex(selectedIndex - 1);
        }
    };
    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedIndex < images.length - 1) {
            setSelectedImage(images[selectedIndex + 1]);
            setSelectedIndex(selectedIndex + 1);
        }
    };

    if (!mounted) return null;

    return (
        <>
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-4 text-center text-gray-800 dark:text-gray-200">RECENT WORK</div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-lg z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => { setSelectedImage(null); setSelectedIndex(null); }}
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
                            src={selectedImage}
                            alt="Preview"
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-white/20"
                            initial={{ scale: 1 }}
                            animate={{ scale: 0.95 }}
                            exit={{ scale: 1 }}
                            transition={{ duration: 0.3 }} />
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
                        <div key={index} className="bg-white/70 dark:bg-black/40 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex items-center justify-center">
                            <Image
                                src={`${item}`}
                                alt="Image"
                                width={400}
                                height={500}
                                className="rounded-xl object-cover w-full h-auto transition duration-300 hover:brightness-110"
                                draggable={false}
                                onClick={() => openImage(item, index)}
                            />
                        </div>
                    ))}
                </Masonry>
            </Box>
        </>
    );
}
