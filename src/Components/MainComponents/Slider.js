import React, { useState } from 'react';
import { Box, Button, Typography, } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { sliderItems } from '../../utilis/data';

const container = {
    width: '100%',
    height: '90vh',
    backgroundColor: 'coral',
    display: 'flex',
    // display: {xs:'none', md:'flex'},
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    mb: 5
};
const arrow = {
    width: { xs: '35px', md: '50px' },
    height: { xs: '35px', md: '50px' },
    backgroundColor: '#fff7f7',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    opacity: 0.6,
    zIndex: 2
};
const wrapper = {
    height: '100%',
    display: 'flex',
};
const slide = {
    height: '100%',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
};
const imgContainer = {
    height: '95%',
    flex: 1,
    display: { xs: 'none', md: 'block' }
};
const infoContainer = {
    boxSizing: 'border-box',
    height: '100%',
    flex: 1,
    m: { xs: 0, md: '5%' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: { xs: 'center', md: 'flex-start' },
    // mx: {xs: '5%'}
};
const infoTitle = {
    fontSize: { xs: '40px', md: '56px', lg: '70px' }
};
const infoDesc = {
    fontSize: { xs: '15px', md: '18px', lg: '20px' },
    fontWeight: '500',
    my: '50px',
    px: { xs: '15px', md: 0 },
    letterSpacing: '3px',
    textAlign: { xs: 'center', md: 'left' }
};
const button = {
    borderRadius: 0,
    color: 'black',
    fontSize: { xs: '15px', md: '18px', lg: '20px' },
    p: '7px 10px',
    borderColor: 'black'
};



const Slider = () => {
    const [ slideIndex, setSlideIndex ] = useState( 0 );
    const handleClick = ( direction ) => {
        if ( direction === 'left' ) {
            setSlideIndex( slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1 );
        } else if ( direction === 'right' ) {
            setSlideIndex( slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0 );
        }
    };
    return (
        <Box sx={container}>
            <Box sx={arrow} onClick={() => handleClick( 'left' )} style={{ left: '10px' }}>
                <ArrowLeft />
            </Box>
            <Box sx={wrapper} style={{ transform: `translateX(${slideIndex * ( -100 )}vw)`, transition: 'all 1.5s ease' }}>
                {sliderItems.map( item =>
                    <Box key={item.id} sx={slide} style={{ backgroundColor: `${item.bg}`, }}>
                        <Box sx={imgContainer}>
                            <img style={{ height: '100%', mx: 'auto', width: '100%' }} src={item.img} alt="Italian Trulli" />
                        </Box>
                        <Box sx={infoContainer}>
                            <Typography sx={infoTitle} variant='h1'>{item.title}</Typography>
                            <Typography sx={infoDesc}>{item.desc}</Typography>
                            <Button sx={button} variant="outlined">SHOP NOW</Button>
                        </Box>
                    </Box>
                )}
            </Box>
            <Box sx={arrow} onClick={() => handleClick( 'right' )} style={{ right: '10px' }}>
                <ArrowRight />
            </Box>
        </Box>
    );
};

export default Slider;