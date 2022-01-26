import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import frame from "../../../images/header-frame.png";

const About = () => {
  return (
    <div>
      <div className="aboutCover">
        <Typography sx={{ color: "#fff", fontWeight: "600" }} variant="h2">
          About Us
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h6">
          <Link style={{ color: "#fff" }} to="/home">
            Home
          </Link>{" "}
          / <span>About Us</span>
        </Typography>
      </div>
      <div className="pageCoverFrame">
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default About;
