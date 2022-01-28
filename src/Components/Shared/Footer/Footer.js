import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if(!location?.pathname?.includes('dashboard'))
  return (
    <>
      <Box className="footer-background" sx={{ py: 10 }}>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item md={8} sx={{ mx: "auto" }}>
            <Typography
              variant="h6"
              sx={{ color: "#999", fontWeight: "light", fontStyle: "italic" }}
            >
              Based in Utah, USA, Wanderlust is a blog by Markus Thompson. His
              posts explore outdoor exeriences through photos and diaries with
              tips & tricks.
            </Typography>
            <Box
              sx={{ display: "flex", pt: 4, justifyContent: "center", gap: 4 }}
            >
              <Link style={{textDecoration:"none"}} to="/contact">
                {" "}
                <Typography  sx={{color:"#4d8150"}} variant="h6">Contact</Typography>
              </Link>
              <Link style={{textDecoration:"none"}} to="/destination">
                <Typography  sx={{color:"#4d8150"}} variant="h6">Destination</Typography>
              </Link>
              <Link style={{textDecoration:"none"}} to="/about">
                <Typography  sx={{color:"#4d8150"}} variant="h6">About</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ background: "#ecebe1", color: "#4d8150", py: 2 }}>
        <Typography variant="body2">
          © 2022 Hiker, All Rights Reserved
        </Typography>
      </Box>
    </>
  );
  return null;
};

export default Footer;
// https://cryptic-lowlands-46261.herokuapp.com/