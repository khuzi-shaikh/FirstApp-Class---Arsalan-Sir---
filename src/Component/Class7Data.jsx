import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
export const Class7Data = () => {
  const [clss, setClss] = useState();
  const [clss1, setClss1] = useState();
  const [clss2, setClss2] = useState();
  return (
    <div>
      <hr />
      <hr />
      <h1>School Form</h1>
      <h2>7th Class Student</h2>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            label="Student Name"
            type="text"
            onChange={(e) => setClss(e.target.value)}
          />
          <h4>Student Name:{clss}</h4>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Grade Name"
            type="text"
            onChange={(e) => setClss1(e.target.value)}
          />
          <h4>Grade Name:{clss1}</h4>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Roll no."
            type="text"
            onChange={(e) => setClss2(e.target.value)}
          />
          <h4>Roll no:{clss2}</h4>
        </Grid>
      </Grid>

      <hr />
      <hr />
    </div>
  );
};
