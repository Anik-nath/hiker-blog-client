import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/blogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);

    return (
        <div>
            <h1>Manage all blogs</h1>
            <Container>
                <Box>
                    <Grid container spacing={{md:2 , xs:2}}>
                    {blogs.map((blog) => 
                        <Grid item md={3} xs={12} sm={6}>
                            <img style={{width:"100%"}} src={blog.blogImage} alt="" />
                            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                            <Button variant="outlined" color="success" >Action</Button>
                            <Button variant="outlined" color="success" >Read</Button>
                            <Button variant="contained" color="error" >X</Button>
                            </Box>
                        </Grid>
                    )};
                       
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ManageBlog;