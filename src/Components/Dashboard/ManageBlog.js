import { Button, Container, Grid, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-lowlands-46261.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //delete
  const hanndleDelete = (id) => {
    const wantToDelete = window.confirm("Are sure you?");
    if (wantToDelete) {
      const url = `https://cryptic-lowlands-46261.herokuapp.com/blogs/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted succesfuly");
            const remainingBlogs = blogs.filter((blog) => blog._id !== id);
            setBlogs(remainingBlogs);
          }
        });
    }
  };
  return (
    <div>
      <h1>Manage all blogs</h1>
      <Container>
        <Box>
          {blogs.length === 0 ? (
            <LinearProgress color="success" />
          ) : (
            <Grid container spacing={{ md: 2, xs: 2 }}>
              {blogs.map((blog) => (
                <Grid item md={3} xs={12} sm={6}>
                  <img style={{ width: "100%" }} src={blog.blogImage} alt="" />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="outlined" color="success">
                      Action
                    </Button>
                    <Button variant="outlined" color="success">
                      Read
                    </Button>
                    <Button
                      onClick={() => hanndleDelete(blog._id)}
                      variant="contained"
                      color="error"
                    >
                      X
                    </Button>
                  </Box>
                </Grid>
              ))}
              ;
            </Grid>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default ManageBlog;
