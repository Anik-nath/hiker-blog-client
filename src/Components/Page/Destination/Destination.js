import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import frame from "../../../images/header-frame.png";

const Destination = () => {
  return (
    <div>
      <div className="destinationCover">
        <Typography sx={{ color: "#fff", fontWeight: "600" }} variant="h2">
         Destination
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h6">
          <Link style={{ color: "#fff" }} to="/home">
            Home
          </Link>{" "}
          / <span>Destination</span>
        </Typography>
      </div>
      <div className="pageCoverFrame">
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default Destination;
