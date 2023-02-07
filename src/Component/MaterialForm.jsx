import {
  Button,
  Checkbox,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
export const MaterialForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [pin, setPin] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const handleSubmit = () => {
        const obj={
          Firstname:firstName,
          Lastname:lastName,
          Mobile:mobile,
          Email:email,
          Address:address,
          Pin:pin,
          City:city,
          State:state,
        }    
        console.log(obj)
};

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Email ID"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="pin code"
            onChange={(e) => setPin(e.target.value)}
            type={"number"}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField label="city" onChange={(e) => setCity(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField label="state" onChange={(e) => setState(e.target.value)} />
        </Grid>

        {/* new code */}

        {/* <Grid item xs={2}>
          <Typography>Gender</Typography>
          <Radio name="gender" /> <Typography variant="span">Male</Typography>
          <br />
          <Radio name="gender" /> <Typography variant="span">Female</Typography>
          <br />
          <Radio name="gender" /> <Typography variant="span">Other</Typography>
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={5}>
          <Checkbox />
          <Typography variant="span">
            please accept term and condition
          </Typography>
        </Grid> */}
        {/* <Grid item xs={7}></Grid> */}

        {/* <Grid item xs={3}></Grid> */}
        <Grid item xs={3}>
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
