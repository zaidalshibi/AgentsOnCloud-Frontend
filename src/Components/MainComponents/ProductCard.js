import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ProductCard ( { item } ) {
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
                <Button size="small">Add to Cart</Button>
                <Link to={`/product/${item.id}`}>
                    <Button size="small">View Details</Button>
                </Link>
            </CardActions>
        </Card>
    );
}