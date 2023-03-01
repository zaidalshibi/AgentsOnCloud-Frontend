import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const root = {
    position: "sticky",
    top: "1rem",
    minWidth: "275"
};
const title = {
    fontSize: 14
};


export default function OrderSummaryItem () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const handleTotal = () => {
        let total = 0;
        cart.map((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };
    const handleQuantity = () => {
        let quantity = 0;
        cart.map((item) => {
            quantity += item.quantity;
        });
        return quantity;
    };

    return (
        <Card sx={root} elevation={15}>
            <CardContent>
                <Typography
                    sx={title}
                    color="textSecondary"
                    gutterBottom
                >
                    Shopping Cart
                </Typography>
                <Typography variant="div" component="h1">
                    {" "}
                    Order Summary
                </Typography>
                <Typography variant="subtitle2">
                    <hr />
                </Typography>
                <Grid container>
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Typography variant="body1" component="div">
                            Shipping
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Typography variant="h6" component="div">
                            €0
                        </Typography>
                    </Grid>
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Typography variant="body1" component="div">
                            Total
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Typography variant="h6" component="div">
                            €{handleTotal()}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="large" color="secondary">
                    BUY NOW ({handleQuantity()})
                </Button>
            </CardActions>
        </Card>
    );
}