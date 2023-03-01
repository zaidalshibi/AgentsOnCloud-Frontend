import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Send, } from '@mui/icons-material';


const container = {
    height: '60vh',
    backgroundColor: '#fcf5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
};

const title = {
    fontSize: { xs: '30px', md: '50px', lg: '70px' },
    fontWeight: { xs: 600, md: 700 },
    marginBottom: '20px',
};

const desc = {
    fontSize: { xs: '16px', md: '24px' },
    fontWeight: '300',
    marginBottom: '20px',
    textAlign: "center",
    px: 3
};

const inputContainer = {
    width: { xs: '80%', md: '50%' },
    height: '40px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid lightgray',
};

const input = {
    border: 'none',
    flex: 8,
    paddingLeft: '20px',
};

const button = {
    flex: 1,
    border: 'none',
    backgroundColor: 'teal',
    color: 'white',
    borderRadius: 0,
};

const NewsLetter = () => {
    return (
        <Box sx={container}>
            <Typography sx={title}>NEWSLETTER</Typography>
            <Typography sx={desc}>Subscribe to our newsLetter to get offers, coupons, updates</Typography>
            <Box sx={inputContainer}>
                <input style={input} />
                <Button sx={button} variant="contained" endIcon={<Send />}></Button>
            </Box>
        </Box>
    );
};

export default NewsLetter;