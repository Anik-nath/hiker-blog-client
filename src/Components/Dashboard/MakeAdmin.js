import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    const user = { email };

    fetch("https://cryptic-lowlands-46261.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  const handleFiled = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <Container sx={{ pt: 8 }}>
        <Typography variant="h4">Make Admin</Typography>
        <Grid container spacing={{ md: 2, sx: 2 }}>
          <Grid style={{ margin: "0 auto" }} item md={6}>
            <Box>
              <TextField
                type="email"
                color="success"
                margin="dense"
                fullWidth
                label="Email"
                name="email"
                onBlur={handleFiled}
              ></TextField>
              <button onClick={handleSubmit} className="ourButton">
                Post
              </button>
              {success && alert("Admin maded succssfully")}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MakeAdmin;
