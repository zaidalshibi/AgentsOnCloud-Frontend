import { Add, Remove } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Announcement from '../MainComponents/Announcement';
import Footer from '../MainComponents/Footer';
import Navbar from '../MainComponents/NavBar';
import NewsLetter from '../MainComponents/NewsLetter';
import axios from 'axios';
import AddComment from './AddComment';

const container = {};

const wrapper = {
    padding: { xs: '10px', md: '50px' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 5,
    maxWidth: '1200px',
    mx: 'auto',
};
const imgContainer = {
    flex: 1,
};
const image = {
    width: '100%',
    objectFit: 'cover',
};
const infoContainer = {
    flex: 1,
    px: { xs: '10px', md: '50px' },
};

const addContainer = {
    maxWidth: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const amountContainer = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
};
const amount = {
    width: '30px',
    height: '30px',
    borderRadius: '10px',
    border: '1px solid teal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 5px',
};
const btn = {
    padding: '15px',
    // width: '100%',
    border: '2px solid teal',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 0,
    cursor: 'pointer',
    fontWeight: '500',
    '&:hover': {
        backgroundColor: '#f8f4f4',
    }
};

const Product = () => {
    const { id } = useParams();
    const [ product, setProduct ] = useState( {} );
    const [ quantity, setQuantity ] = useState( 1 );
    const [user, setUser] = useState(false);

    useEffect( () => {
        const getProduct = async () => {
            try {
                const res = await axios.get( `${process.env.REACT_APP_API_URL}/item/` + id );
                setProduct( res.data );
            } catch ( err ) {
                console.log( err );
            }
        };
        getProduct();
        if(localStorage.getItem('token')){
            setUser(true);
        }
    }, [ id ] );

    const handleQuantity = ( type ) => {
        if ( type === 'dec' && quantity > 0 ) {
            setQuantity( quantity - 1 );
        }
        if ( type === 'inc' ) {
            setQuantity( quantity + 1 );
        }
    };


    const handleClick = () => {
        const cart = JSON.parse( localStorage.getItem( 'cart' ) );
        if ( cart ) {
            const item = cart.find( ( item ) => item.id === product.id );
            if ( item ) {
                item.quantity += quantity;
                item.productTotal = ( item.quantity * item.price ).toFixed( 2 );
                localStorage.setItem( 'cart', JSON.stringify( cart ) );
            } else {
                localStorage.setItem( 'cart', JSON.stringify( [ ...cart, { ...product, quantity, price: product.price, productTotal: ( product.price * quantity ).toFixed( 2 ) } ] ) );
            }
        } else {
            localStorage.setItem( 'cart', JSON.stringify( [ { ...product, quantity, price: product.price, productTotal: ( product.price * quantity ).toFixed( 2 ) } ] ) );
        }
    };

    return (
        <Box sx={container}>
            <Announcement />
            <Navbar />
            <Box sx={wrapper}>
                <Box sx={imgContainer}>
                    <img style={image} src={product.image} alt='' />
                </Box>
                <Box sx={infoContainer}>
                    <h2 style={{ fontWeight: 200, fontSize: '40px' }}>{product.name}</h2>
                    <Typography sx={{ margin: '20px 0px' }}>{product.description}</Typography>
                    <span style={{ fontWeight: 100, fontSize: '40px' }}>$ {product.price}</span>
                    <Box sx={addContainer}>
                        <Box sx={amountContainer}>
                            <Remove onClick={() => handleQuantity( 'dec' )} />
                            <span style={amount}>{quantity}</span>
                            <Add onClick={() => handleQuantity( 'inc' )} />
                        </Box>
                        <Box>
                            <Button onClick={handleClick} sx={btn}>ADD TO CART</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', padding: '10px' }}>
                <h2 style={{ fontWeight: 200, fontSize: '40px' }}>Comments</h2>
                <hr />
                {product.Comments ? product.Comments.map( ( comment ) => (
                    <>
                        <Box key={comment.id} sx={{ display: 'flex', alignItems: 'center', gap: 5, margin: '20px 0px' }}>
                            <Box>
                                <h3 style={{ fontWeight: 100, fontSize: '15px' }}>{product.User.username}</h3>
                                <p style={{ fontWeight: 200, fontSize: '20px' }}>{comment.comment}</p>
                            </Box>
                        </Box>
                    </>
                ) )
                    : (
                        <>
                        <h3 style={{ fontWeight: 200, fontSize: '20px', paddingTop: '20px', paddingBottom: '20px' }}>No comments yet</h3>
                        <hr />
                        </>
                    )
                }
            </Box>
            { user && 
            <>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', padding: '10px' }}>
                <h2 style={{ fontWeight: 200, fontSize: '40px' }}>Add Comment</h2>
                <hr />
                <AddComment itemId={id}/>
            </Box>
            </>
            }
            <NewsLetter />
            <Footer />
        </Box>
    );
};

export default Product;;