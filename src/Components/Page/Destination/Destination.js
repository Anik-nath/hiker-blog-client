import { Typography, Container, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import frame from "../../../images/header-frame.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Destination = () => {
  const [destination, setDestination] = useState([]);
  useEffect(() => {
    fetch("https://glacial-lake-74710.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);
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
      <Container>
        {destination.length === 0 ? (
          <LinearProgress color="success" />
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="10px">
              {destination.map((destination) => (
                <Box sx={{ pb: 4 }}>
                  <img
                    key={destination._id}
                    src={destination.img}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                  />
                  <Typography variant="h6">{destination.name}</Typography>
                </Box>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </Container>
    </div>
  );
};

export default Destination;
