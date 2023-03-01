import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Box, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const container = {
    height: { xs: '50px', sm: '60px', },
};
const wrapper = {
    padding: { xs: '10px 0px', md: '10px 20px', },
    display: 'flex',
    justifyContent: 'space-between'
};
const left = {
    flex: 1,
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
};
const logo = {
    fontSize: { xs: '24px', md: '32px', lg: '40px' },
    fontWeight: 'bold',
    textAlign: { xs: 'left', md: 'center' },
    ml: { xs: '15px', md: '0' }
};
const right = {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
};
const menuItem = {
    cursor: 'pointer',
    mx: '15px',
    fontSize: { xs: '12px', md: '14px' }
};
const Navbar = () => {
    const [ user, setUser ] = React.useState( false );
    const handleLogOut = () => {
        localStorage.clear();
        setUser( false );
    };
    useEffect( () => {
        const user = localStorage.getItem( 'token' );
        if ( user ) {
            setUser( true );
        }
    }, [] );
    return (
        <Box sx={container}>
            <Box sx={wrapper}>
                <Box sx={left}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><Typography variant='h1' sx={logo}>Ecommerce</Typography></Link>
                </Box>
                <Box sx={right}>
                    {
                        user ?
                            <Box sx={menuItem}>
                                <Typography onClick={handleLogOut}>Log Out</Typography>
                            </Box>
                            :
                            <>
                                <Box sx={menuItem}>
                                    <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}><Typography sx={{}}>Register</Typography></Link>
                                </Box>
                                <Box sx={menuItem}>
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}><Typography sx={{}}>LogIn</Typography></Link>
                                </Box>
                            </>
                    }
                    <Link to="/cart">
                        <Box sx={menuItem}>
                            <Badge color="secondary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;