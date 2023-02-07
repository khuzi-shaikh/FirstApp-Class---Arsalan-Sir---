import { Card, CardContent, Grid } from "@mui/material";
import React from 'react'

export const McByMap = () => {
      const arr = [
        { image_url: "./1.jpg", name: "Yamaha-R6" },
          { image_url: "./2.jpg", name: "Captain-America" },
          { image_url: "./3.jpeg", name: "DeadPool" },
          { image_url: "./4.jpg", name: "IronMan" },
          { image_url: "./5.png", name: "BlackPanther" },
          { image_url: "./6.jpg", name: "SpiderMan" },
          { image_url: "./7.jpg", name: "IronMan" },
          { image_url: "./8.jpg", name: "Goku" },
          { image_url: "./9.jpg", name: "BatMan" },
          { image_url: "./10.jpeg", name: "Joker" },
          { image_url: "./12.jpg", name: "CristianoRonaldo" },
          { image_url: "./13.jpg", name: "Spider" },
    
    ];
  return (
    <div>
  <Grid container spacing={1}>
        {arr.map((item) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent style={{ backgroundColor: "black" }}>
                  <img src={item.image_url} alt="" widt={200} height={300} />
                  <h1 style={{color:"white"}}>{item.name}</h1>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

    </div>
  )
}