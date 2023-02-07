import { Card, CardContent, Grid } from "@mui/material";
import React from 'react'

export const McByHardcore = () => {
  return (
    <div>
        <Grid container spacing={5}>
        <Grid item xs={4}>
          <Card>
            <CardContent style={{ backgroundColor: "black" }}>
              <img src="./me.jpg" alt="" width={300} height={300} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent style={{ backgroundColor: "black" }}>
              <img src="./me2.jpg" alt="" width={280} height={300} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent style={{ backgroundColor: "black" }}>
              <img src="./me3.jpg" alt="" width={300} height={300} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
