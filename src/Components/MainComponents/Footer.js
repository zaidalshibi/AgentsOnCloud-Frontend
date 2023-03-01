import React from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';

const container = {
    display: 'flex',
    flexDirection: { xs: "column", sm: 'row' }
};

const left = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
};

const desc = {
    margin: '20px 0px',
};

const socialContainer = {
    display: 'flex',
};

const socialIcon = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
};

const center = {
    flex: 1,
    padding: '20px',
    display: { xs: "none", md: 'block' }
};

const title = {
    mb: '30px'
};

const list = {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
};

const listItem = {
    width: '50%',
    mb: '10px',
};

const right = {
    flex: 1,
    padding: '20px',
    backgroundColor: { xs: "#fff8f8", sm: 'transparent' }
};

const contactItem = {
    mb: '20px',
    display: 'flex',
    alignItems: 'center',
};

const payment = {
    width: '50%'
};

const Footer = () => {
    return (
        <Box sx={container}>
            <Box sx={left}>
                <Typography variant='h2'>Logo</Typography>
                <Typography sx={desc}>About</Typography>
                <Box sx={socialContainer}>
                    <Box sx={socialIcon} style={{ backgroundColor: '#3B5999' }}>
                        <Facebook />
                    </Box>
                    <Box sx={socialIcon} style={{ backgroundColor: '#E4405F' }}>
                        <Instagram />
                    </Box>
                    <Box sx={socialIcon} style={{ backgroundColor: '#55ACEE' }}>
                        <Twitter />
                    </Box>
                    <Box sx={socialIcon} style={{ backgroundColor: '#E60023' }}>
                        <Pinterest />
                    </Box>
                </Box>
            </Box>

            <Box sx={center}>
                <Typography sx={title}>Useful Links</Typography>
                <ul style={list}>
                    <li style={listItem}>Home</li>
                    <li style={listItem}>Cart</li>
                    <li style={listItem}>Man Fashion</li>
                    <li style={listItem}>Woman Fashion</li>
                    <li style={listItem}>Accessories</li>
                    <li style={listItem}>My Account</li>
                    <li style={listItem}>Order Tracking</li>
                    <li style={listItem}>Wishlist</li>
                    <li style={listItem}>Wishlist</li>
                    <li style={listItem}>Terms</li>
                </ul>
            </Box>

            <Box sx={right}>
                <Typography sx={title}>Contact</Typography>
                <Box sx={contactItem}>
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </Box>
                <Box sx={contactItem}>
                    <Phone style={{ marginRight: "10px" }} /> +x xx xx xx xx
                </Box>
                <Box sx={contactItem}>
                    <MailOutline style={{ marginRight: "10px" }} /> zaidealshibi@gmail.com
                </Box>
                <img style={payment} src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Box>

        </Box>
    );
};

export default Footer;