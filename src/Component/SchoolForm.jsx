import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const SchoolForm = () => {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const obj = {
      fName: name,
      mobileNo: mobile,
      eMail: email,
      PassWord: password,
    };
    setData([...data, obj]);
  };
  const handleDelete = (index) => {
    const deleteData = data.filter((item, ind) => ind != index);
    setData(deleteData);
  };

  return (
    <div>
      <h1>School Ragistration</h1>
      <Grid container spacing={5}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={3}>
          <TextField label="Name" onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Mobile"
            type="number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={6}></Grid>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container spacing={5}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <h3>Name:{item.fName}</h3>
                  <h3>Mobile:{item.mobileNo}</h3>
                  <h3>Email:{item.eMail}</h3>
                  <h3>Password:{item.PassWord}</h3>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
