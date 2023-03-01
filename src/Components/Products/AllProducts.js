import { Box, Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import Navbar from '../MainComponents/NavBar';
import Footer from '../MainComponents/Footer';

const container = {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    mx: 'auto'
}
const button = {
    borderRadius: 0,
    color: 'black',
    fontSize: {xs:'15px', md: '18px', lg:'20px'},
    p: '7px 10px',
    borderColor: 'black'
}

const ProductsAll = () => {

    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getProducts = async () => {
            try{
                const res = await axios.get( `${process.env.REACT_APP_API_URL}/item`);
                setProducts(res.data);
            }catch(err){
                console.log(err)
            }
        }
        getProducts()
    },[])
    return (
        <>
        <Navbar />
        <Box sx={container}>
            {
                products.slice(0,8).map(item => 
                    <ProductCard key={item.id} item={item} />    
                )
            }
        </Box>
        { products.length > 8 &&
        <Box sx={{display: 'flex', justifyContent: 'center', mb: '50px'}}>
            <Link to={`/products`}><Button sx={button} variant="outlined">View All</Button></Link>
        </Box>
        }
        <Footer />
        </>
    );
};

export default ProductsAll;