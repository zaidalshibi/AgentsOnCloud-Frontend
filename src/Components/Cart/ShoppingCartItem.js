import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const root = {
    display: "flex",
    marginTop: 15
};

const details = {
    display: "flex",
    flexDirection: "column"
};
const content = {
    flex: "1 0 auto"
};
const cover = {
    width: 151
};


export default function ShoppingCartItem ( { item } ) {
    const handleRemove = () => {
        let cart = JSON.parse( localStorage.getItem( "cart" ) );
        cart = cart.filter( ( cartItem ) => cartItem.id !== item.id );
        localStorage.setItem( "cart", JSON.stringify( cart ) );
        window.location.reload();
    };

    const handleQuantity = ( e ) => {
        let cart = JSON.parse( localStorage.getItem( "cart" ) );
        cart.map( ( cartItem ) => {
            if ( cartItem.id === item.id ) {
                cartItem.quantity = e.target.value;
            }
        } );
        localStorage.setItem( "cart", JSON.stringify( cart ) );
        window.location.reload();
    };
    return (
        <Card sx={root}>
            <CardMedia
                sx={cover}
                image={item.image}
                title="Live from space album cover"
            />
            <CardContent sx={content}>
                <CardMedia
                    sx={cover}
                    image={item.image}
                    title="Live from space album cover"
                />
                <Typography variant="div" component="h2">
                    Item Name : {item.name}
                </Typography>
                <Typography variant="subtitle2">
                    <hr />
                </Typography>
                <Grid container>
                    <Grid item xs={10} sm={9} md={10} lg={10}>
                        <Typography
                            variant="body1"
                            component="div"
                            style={{ fontWeight: "bold" }}
                        >
                            Quantity
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Typography variant="h6" component="div" color="secondary">
                            {item.quantity}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={9} md={10} lg={10}>
                        <Typography
                            variant="body1"
                            component="div"
                            style={{ fontWeight: "bold" }}
                        >
                            Price
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <Typography variant="h6" component="div" color="secondary">
                            €{item.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={9} md={10} lg={10}>
                        <Typography variant="body1" component="div">
                            Remove item from cart
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <Typography
                            variant="h6"
                            component="div"
                            color="secondary"
                            onClick={handleRemove}
                            cursor="pointer"
                        >
                            XXX
                        </Typography>
                        <Typography variant="subtitle2">
                            <hr />
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={9} md={10} lg={10}>
                        <Typography variant="body1" component="div">
                            Edit Quantity
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <Typography variant="h6" component="div" color="secondary">
                            <input
                                type="number"
                                min="1"
                                max="10"
                                defaultValue={item.quantity}
                                onChange={handleQuantity}
                            />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}