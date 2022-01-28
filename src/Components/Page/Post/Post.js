import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import frame from "../../../images/header-frame.png";

const Post = () => {
  // const [services, setService] = useState([]);
  const [data, setData] = useState({});

  //   useEffect(() => {
  //     const url = "http://localhost:5000/blogs";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setService(data));
  //   }, []);

  //order functionality
  const handleFiled = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(value);
    const newField = { ...data };
    newField[field] = value;
    // console.log(newField);
    setData(newField);
  };
  const handleSubmit = (e) => {
    const posts = {
      ...data,
      blogAuthor: data?.blogAuthor,
      blogName: data?.blogName,
      location: data?.location,
      blogImage: data?.blogImage,
      blogDetails: data?.blogDetails,
      blogDate: new Date().toLocaleDateString(),
      blogTime: new Date().toLocaleTimeString(),
    };
    console.log(posts);

    //now fetch and post data
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully post your experience");
          window.location.replace("http://localhost:3000/blogs");
        }
      });
    // e.preventDefault();
  };

  return (
    <div>
      {!window.location?.pathname?.includes("dashboard") && (
        <>
          <div className="contactCover">
            <Typography sx={{ color: "#fff", fontWeight: "600" }} variant="h2">
              Post
            </Typography>
            <Typography sx={{ color: "#fff" }} variant="h6">
              <Link style={{ color: "#fff" }} to="/home">
                Home
              </Link>{" "}
              / <span>Post</span>
            </Typography>
          </div>
          <div className="pageCoverFrame">
            <img src={frame} alt="" />
          </div>
        </>
      )}
      <Box>
        <Container sx={{ pt: 8 }}>
          <Typography variant="h4">Post Your Blog</Typography>
          <Grid container spacing={{ md: 2, sx: 2 }}>
            <Grid style={{ margin: "0 auto" }} item md={6}>
              <Box>
                <TextField
                  color="success"
                  margin="dense"
                  fullWidth
                  label="Author"
                  name="blogAuthor"
                  onBlur={handleFiled}
                ></TextField>
                <TextField
                  margin="dense"
                  color="success"
                  fullWidth
                  label="Title"
                  variant="outlined"
                  name="blogName"
                  onBlur={handleFiled}
                ></TextField>
                <TextField
                  margin="dense"
                  color="success"
                  fullWidth
                  label="Location"
                  variant="outlined"
                  name="location"
                  onBlur={handleFiled}
                ></TextField>
                <TextField
                  color="success"
                  margin="dense"
                  fullWidth
                  label="Image Url"
                  variant="outlined"
                  name="blogImage"
                  onBlur={handleFiled}
                ></TextField>

                <TextField
                  margin="dense"
                  color="success"
                  multiline
                  rows={5}
                  fullWidth
                  label="Blogs"
                  name="blogDetails"
                  onBlur={handleFiled}
                ></TextField>
                <button onClick={handleSubmit} className="ourButton">
                  Post
                </button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Post;
