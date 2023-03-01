import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductCard ( { item } ) {
    const [ user, setUser ] = useState( false );
    const ownerID = localStorage.getItem( 'id' );
    const token = localStorage.getItem( 'token' );
    const obj = {
        ownerID: ownerID,
    };
    const handleDelete = ( id ) => {
        axios.delete( `${process.env.REACT_APP_API_URL}/item/${id}`, obj,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        )
            .then( ( res ) => {
                console.log( res );
            } )
            .catch( ( err ) => {
                console.log( err );
            } );
    };
    useEffect( () => {
        const id = localStorage.getItem( 'id' );
        if ( id ) {
            if ( id == item.ownerID ) {
                setUser( true );
            }
        }
    }, [] );
    return (
        <Card sx={{ maxWidth: 900 }}>
            <CardMedia
                sx={{ height: 300, width: 300 }}
                image={item.image}
                title={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description : {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price : {item.price}
                </Typography>
            </CardContent>
            <CardActions
                align="center"
            >
                <Link to={`/product/${item.id}`}>
                    <Button size="small">View Details</Button>
                </Link>
                {user && (
                    <>
                        <Link to={`/editproduct/${item.id}`}>
                            <Button size="small">Edit</Button>
                        </Link>
                        <Button size="small" onClick={() => handleDelete( item.id )}>Delete</Button>
                    </>
                )}
            </CardActions>
        </Card>
    );
}