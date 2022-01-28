import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import frame from "../../../images/header-frame.png";
import loginImg from "../../../images/loginImage1.jpg";
import google from "../../../images/google.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useAuth from "../../../Firebase/Hook/useAuth";

const Login = () => {
  const [data, setData] = useState({});
  const { googleSignIn, login, createUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignIn(location, navigate);
  };

  const handleInput = (e) => {
    const field = e.target.name;
    let value = e.target.value;
    console.log(value);
    const newField = { ...data };
    newField[field] = value;
    setData(newField);
    console.log(newField);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(data.email, data.password, location, navigate);
  };
  // ---------------------------
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   --------------------------
  const handleRegister = (e) => {
    e.preventDefault();
    createUser(data.email, data.password, data.fullname, location, navigate);
  };

  return (
    <div>
      <div className="aboutCover">
        <Typography sx={{ color: "#fff", fontWeight: "600" }} variant="h2">
          Sign In
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h6">
          <Link style={{ color: "#fff" }} to="/home">
            Home
          </Link>{" "}
          / <span>Sign In</span>
        </Typography>
      </div>
      <div className="pageCoverFrame">
        <img src={frame} alt="" />
      </div>
      <Container>
        <Box sx={{ py: 6 }}>
          <Grid sx={{ backgroundColor: "#ecebe1" }} container>
            <Grid item xs={12} sm={6} md={6} sx={{ mx: "auto" }}>
              <Box sx={{ position: "relative" }}>
                <img style={{ width: "100%" }} src={loginImg} alt="" />
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background: "#032f2b4f",
                    top: "0",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: "#fff", fontWeight: "600", px: 14, pt: 14 }}
                      variant="h6"
                    >
                      TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 4,
                      pt: 14,
                      color: "#fff",
                    }}
                  >
                    <FacebookRoundedIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ mx: "auto" }}>
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#4d8150" }}
                >
                  Travel Blog
                </Typography>
                <TextField
                  onBlur={handleInput}
                  fullWidth
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  onBlur={handleInput}
                  margin="dense"
                  fullWidth
                  required
                  type="password"
                  name="password"
                  id="password"
                  label="Password"
                  variant="standard"
                />
                <Typography sx={{ textAlign: "center", pt: 2 }} variant="body2">
                  Don't have an account?{" "}
                  <Button onClick={handleClickOpen}>
                    <Typography variant="body2">Register Please</Typography>
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Create an account</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        To register, please enter your email and password here.
                        <img src="" alt="" />
                      </DialogContentText>
                      <TextField
                        onBlur={handleInput}
                        fullWidth
                        name="fullname"
                        id="fullname"
                        label="Fullname"
                        variant="standard"
                      />
                      <TextField
                        onBlur={handleInput}
                        fullWidth
                        type="email"
                        name="email"
                        id="email"
                        label="Email"
                        variant="standard"
                      />
                      <TextField
                        onBlur={handleInput}
                        margin="dense"
                        fullWidth
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions>
                      <button className="ourButton" onClick={handleClose}>
                        X
                      </button>
                      <button className="ourButton" onClick={handleRegister}>
                        Create
                      </button>
                    </DialogActions>
                  </Dialog>
                </Typography>
                <button
                  onClick={handleLogin}
                  style={{ width: "100%" }}
                  className="ourButton"
                >
                  Login
                </button>
                <Divider sx={{ py: 4 }}>Or</Divider>
                <Box>
                  <button
                    onClick={handleGoogle}
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="ourButton"
                  >
                    <img style={{ width: "25px" }} src={google} alt="" />
                    Continue With Google
                  </button>
                </Box>
                <Typography sx={{ textAlign: "center", pt: 4 }} variant="body2">
                  Happy Travel :)
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Outlet />
    </div>
  );
};

export default Login;
