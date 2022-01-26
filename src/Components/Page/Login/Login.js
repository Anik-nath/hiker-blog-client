import { Box, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import frame from "../../../images/header-frame.png";
import loginImg from "../../../images/loginImage1.jpg";
import google from "../../../images/google.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Login = () => {
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
                      sx={{ color: "#fff", fontWeight: "600",px:14,pt:14 }}
                      variant="h6"
                    >
                      TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER
                    </Typography>
                  </Box>
                  <Box sx={{display:"flex",justifyContent:"center",gap:4,pt:14,color:"#fff"}}>
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
                  fullWidth
                  name="email"
                  id="Email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  margin="dense"
                  fullWidth
                  name="password"
                  id="Password"
                  label="Password"
                  variant="standard"
                />
                <Typography sx={{ textAlign: "right" }} variant="body2">
                  Forget Your Password?
                </Typography>
                <button style={{ width: "100%" }} className="ourButton">
                  Login
                </button>
                <Divider sx={{py:4}}>Or</Divider>
                <Box>
                  <button style={{ width: "100%",display:"flex",gap:8,alignItems:'center',justifyContent:"center" }} className="ourButton">
                      <img style={{width:"25px"}} src={google} alt="" />
                      Continue With Google</button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
