'use client';

// import Image from 'next/image';
import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { images } from './data';
import { useTheme } from '@mui/material/styles';
// import { Paper, styled } from '@mui/material';
import { useMediaQuery } from '@mui/material';
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

    return (
        <Box
            sx={{
                padding: isSmallScreen ? '0.2rem' : '0.5rem', // Adjust padding for smaller screens
                width: '100%',
                maxWidth:  isSmallScreen ? '25rem' : '100rem', // Limit the maximum width on larger screens
                margin: '0 auto', // Center the content
            }}
            className='flex justify-center items-center'>
            <Masonry columns={isSmallScreen ? 2 : 4} spacing={2}>
                {images.map((item, index) => (
                    <div key={index} className='transition duration-500 ease-in-out transform hover:scale-105'>
                        {/* <Label>{index + 1}</Label> */}
                        <img
                            srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
                            src={`${item}?w=162&auto=format`}
                            alt="Image"
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                            draggable={false}
                            onClick={() => window.open(item)}
                        />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}