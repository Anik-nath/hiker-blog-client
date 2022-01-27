import { Pagination, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const FeaturedBlog = () => {
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

    return (
        <Box sx={{px:4}}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
            >
              <Masonry columnsCount={3} gutter="20px">
                {blogs.slice(0,10).map((blog) => (
                  <Link style={{textDecoration:"none"}} to={`/details/${blog._id}`}>
                  <Paper sx={{pb:4}}>
                    <img
                      key={blog._id}
                      src={blog.blogImage}
                      style={{ width: "100%", display: "block" }}
                      alt=""
                    />
                    <Typography sx={{color:"gray",py:2,display:"flex",alignItems:"center",justifyContent:"center"}} variant="body2"><EditIcon/> by {blog.blogAuthor}</Typography>
                    <Typography sx={{color:"gray",textTransform:"justify"}} variant="body">{blog.blogName}</Typography>
                  </Paper>
                  </Link>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            <Box sx={{mt:10,display:"flex",justifyContent:"center"}}>
              <Stack spacing={2}>
                <Pagination count={10} />
              </Stack>
            </Box>
        </Box>
    );
};

export default FeaturedBlog;