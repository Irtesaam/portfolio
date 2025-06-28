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

const TAGS = [
    'Favourites',
    'Landscape',
    'Street',
    'Travel',
];

const LOCATIONS = [
    'Bir Billing',
    'Kashmir',
    'Nainital',
    'Rishikesh',
    'Varanasi',
    'Delhi',
    'Hyderabad',
    'Vizag',
    'Shimla',
];

export default function ImageMasonry() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [selectedTag, setSelectedTag] = useState<string>('Favourites');

    useEffect(() => { setMounted(true); }, []);

    // On mount, load from localStorage or use defaults
    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            const storedTag = localStorage.getItem('snaps_selectedTag');
            const storedLocation = localStorage.getItem('snaps_selectedLocation');
            if (storedTag && TAGS.includes(storedTag)) {
                setSelectedTag(storedTag);
            }
            if (storedLocation && LOCATIONS.includes(storedLocation)) {
                setSelectedLocation(storedLocation);
            }
        }
    }, []);

    // Persist selectedTag
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('snaps_selectedTag', selectedTag);
        }
    }, [selectedTag]);

    // Persist selectedLocation
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('snaps_selectedLocation', selectedLocation);
        }
    }, [selectedLocation]);

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

    // Filter images by selected location and tag
    const filteredImages = images.filter(img => {
        const locationMatch = !selectedLocation || img.location === selectedLocation;
        const tagMatch = selectedTag === 'All' ? true : img.tags.includes(selectedTag.toLowerCase());
        // Only show images with tags if a tag is selected (not 'All')
        if (selectedTag !== 'All') {
            return locationMatch && tagMatch && img.tags.length > 0;
        }
        return locationMatch;
    });

    if (!mounted) return null;

    return (
        <>
            {/* Responsive header and dropdowns */}
            <div className="relative flex flex-col items-center mt-8 mb-4 w-full">
                <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center relative gap-2">
                    {/* Centered title */}
                    <div className="w-full text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200" style={{ fontFamily: 'Lobster, cursive', fontWeight: 400, letterSpacing: '0.04em' }}>
                        My Collections
                    </div>
                    {/* Tag Dropdown */}
                    <div className="w-full sm:w-auto sm:absolute sm:left-5 sm:top-1/2 sm:-translate-y-1/2 flex justify-center sm:justify-start mt-4 sm:mt-0 px-2">
                        <select
                            className="border-2 border-gray-700 dark:border-gray-600 rounded-xl px-4 py-2 text-base bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-200 text-gray-800 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-200 min-w-[170px] hover:border-gray-800 hover:shadow-xl cursor-pointer"
                            value={selectedTag}
                            onChange={e => setSelectedTag(e.target.value)}
                        >
                            <option value="All" className="text-gray-400">All</option>
                            {TAGS.map(tag => (
                                <option key={tag} value={tag} className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">{tag}</option>
                            ))}
                        </select>
                    </div>
                    {/* Location Dropdown */}
                    <div
                        className="w-full sm:w-auto sm:absolute sm:right-5 sm:top-1/2 sm:-translate-y-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 px-2"
                    >
                        <select
                            className="border-2 border-gray-700 dark:border-gray-600 rounded-xl px-4 py-2 text-base bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-200 text-gray-800 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-200 min-w-[170px] hover:border-gray-800 hover:shadow-xl cursor-pointer"
                            value={selectedLocation}
                            onChange={e => setSelectedLocation(e.target.value)}
                        >
                            <option value="" className="text-gray-400">Select Location</option>
                            {LOCATIONS.map(loc => (
                                <option key={loc} value={loc} className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">{loc}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
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
                {filteredImages.length === 0 ? (
                    <div className="text-center text-lg text-gray-600 dark:text-gray-300 w-full py-12">
                        No photos available yet for location <span className="font-semibold">{selectedLocation}</span>
                    </div>
                ) : (
                    <Masonry columns={isSmallScreen ? 2 : 4} spacing={2}>
                        {filteredImages.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/70 dark:bg-black/40 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex items-center justify-center relative group"
                            >
                                <Image
                                    src={item.src.replace('/upload/', '/upload/q_40/')}
                                    alt="Image"
                                    width={400}
                                    height={500}
                                    className="rounded-xl object-cover w-full h-auto transition duration-300 hover:brightness-110"
                                    draggable={false}
                                    onClick={() => openImage(images.findIndex(img => img.src === item.src && img.location === item.location))}
                                    onContextMenu={e => e.preventDefault()}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="/snaps/placeholder.webp"
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
                )}
            </Box>
        </>
    );
}
