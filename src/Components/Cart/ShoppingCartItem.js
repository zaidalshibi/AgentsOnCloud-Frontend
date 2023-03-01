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


export default function ShoppingCartItem () {

    return (
        <Card sx={root}>
            <CardMedia
                sx={cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
            />
            <CardContent sx={content}>
                <CardMedia
                    sx={cover}
                    image="https://source.unsplash.com/random"
                    title="Live from space album cover"
                />
                <Typography
                    sx={details}
                    color="textSecondary"
                    gutterBottom
                >
                    Category
                </Typography>
                <Typography variant="div" component="h2">
                    Item Name{" "}
                </Typography>
                <Typography variant="subtitle2">
                    <hr />
                </Typography>
                <Grid container>
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Typography variant="body1" component="div">
                            Size
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Typography variant="h6" component="div">
                            M
                        </Typography>
                    </Grid>
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Typography variant="body1" component="div">
                            Quantity
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Typography variant="h6" component="div">
                            1
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
                            €105.99
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}