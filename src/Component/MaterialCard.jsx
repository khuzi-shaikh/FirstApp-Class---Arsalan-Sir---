import {
  Button,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { FakeApi } from "./FakeApi";

export const MaterialCard = () => {
  return (
    <div>
      <h1 id="h1">Khuzi's Online Store</h1>
      <h3 id="login">Login</h3>
      <h3 id="seller">Become a Seller</h3>
      <h3 id="cart">🛒Cart</h3>
      <br />
      <br />
      <img
        className="sale"
        src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/e44bae2551baed67.jpg?q=50"
        alt="d"
      ></img>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={3}>
        {FakeApi.map((item) => {
          return (
            <Grid item xs={3}>
              <Card className="Card">
                <CardContent>
                  <img src={item.image} alt="" width={200} height={250} />
                  <br />
                  <br />
                  <hr id="hr" />
                  <Typography component="legend">No rating given</Typography>
                  <Rating name="no-value" value={null} />
                  <h4>{item.title}</h4>
                  <h2>{item.price}</h2>
                  <br />
                  <Button variant="contained" color="success">
                    👜 Buy
                  </Button>
                  <span> </span>
                  <Button variant="outlined">🤍 Wishlist</Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
