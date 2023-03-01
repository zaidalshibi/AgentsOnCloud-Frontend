import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";
import Navbar from "../MainComponents/NavBar";
import Footer from "../MainComponents/Footer";

export default function ShoppingCart () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return (
        <React.Fragment>
            <Navbar />
            <CssBaseline />
            <Container fixed backgroundColor={'gray'}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={7} lg={7}>
                        <Grid container>
                            <Grid item xs>
                                {cart ? cart.map((item) => (
                                <ShoppingCartItem key={item.id} item={item}/>
                                ))
                                : <h1>Cart is empty</h1>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={5}>
                        <OrderSummaryItem />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
}