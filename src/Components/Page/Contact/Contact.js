import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import frame from "../../../images/header-frame.png";

const Contact = () => {
  return (
    <div>
      <div className="contactCover">
        <Typography sx={{ color: "#fff", fontWeight: "600" }} variant="h2">
          Contact Us
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h6">
          <Link style={{ color: "#fff" }} to="/home">
            Home
          </Link>{" "}
          / <span>Contact Us</span>
        </Typography>
      </div>
      <div className="pageCoverFrame">
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default Contact;
