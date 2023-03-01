import React from 'react';
import { Box } from '@mui/material';


const container = {
    height: '30px',
    backgroundColor: 'teal',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
}

const Announcement = () => {
    return (
        <Box sx={container}>
            Super Deal! Free shipping over $100
        </Box>
    );
};

export default Announcement;