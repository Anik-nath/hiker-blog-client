
import { Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import frame from "../../../images/header-frame.png";
import sidebarImg from "../../../images/sidebar-img.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="pageCover">
        <Typography sx={{ color: "#fff", fontWeight: "600" }} variant="h2">
          Blogs
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h6">
          <Link style={{ color: "#fff" }} to="/home">
            Home
          </Link>{" "}
          / <span>Blogs</span>
        </Typography>
      </div>
      <div className="pageCoverFrame">
        <img src={frame} alt="" />
      </div>
      <Box sx={{ py: 10 }}>
        <Grid
          container
          sx={{ px: 4 }}
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          <Grid item xs={12} sm={6} md={4} key={blogs.name}>
            <Box sx={{ textAlign: "left" }}>
              <img src={sidebarImg} alt="" />
              <Typography sx={{fontWeight:"bold",pb:4}} variant="h5">WANDERLUST BLOG</Typography>
              <Typography variant="body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, similique.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8} key={blogs.name}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry columnsCount={3} gutter="10px">
                {blogs.map((blog) => (
                   <Link style={{textDecoration:"none"}} to={`/details/${blog._id}`}>
                  <Box sx={{pb:4}}>
                    <img
                      key={blog._id}
                      src={blog.blogImage}
                      style={{ width: "100%", display: "block" }}
                      alt=""
                    />
                    <Typography sx={{color:"gray",py:2,display:"flex",alignItems:"center",justifyContent:"center"}} variant="body2"><EditIcon/> by {blog.blogAuthor}</Typography>
                    <Typography sx={{color:"gray",textTransform:"justify"}} variant="body">{blog.blogName}</Typography>
                  </Box>
                  </Link>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            <Box sx={{mt:10,display:"flex",justifyContent:"center"}}>
              <Stack spacing={2}>
                <Pagination count={10} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Blogs;

/* 
<div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {blogs.map((blogs) => (
            <Grid item xs={12} sm={4} md={4} key={blogs.name}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
</div>
*/
