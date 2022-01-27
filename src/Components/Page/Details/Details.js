import { Box, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import frame from "../../../images/header-frame.png";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Details = () => {
    const {_id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/blogs/${_id}`
        fetch(url)
          .then((res) => res.json())
          .then((data) => setDetails(data));
      }, [_id]);
  return (
    <div>
      <div className="pageCover">
        <Typography sx={{ color: "#fff", fontWeight: "600" }} variant="h2">
          Blog Details
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h6">
          <Link style={{ color: "#fff" }} to="/home">
            Home
          </Link>{" "}
          / <span>Details</span>
        </Typography>
      </div>
      <div className="pageCoverFrame">
        <img src={frame} alt="" />
      </div>
      <Box>
        <Container sx={{py:8}}>
        <div id="class-image" style={{ overflow: 'hidden' }}>
        <Typography style={{ color:"gray",textAlign:"left" }} variant="body1">
               Author: {details.blogAuthor} Travel Experience
              </Typography>
            <img style={{ width: "100%"}} src={details.blogImage} alt="" />
          </div>
          <Grid sx={{ py: 8,textAlign:"left" }} container spacing={4}>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
            <Typography sx={{color:"gray" }} variant="body1">
              <CalendarTodayIcon/> {details.blogDate} , {details.blogTime} PM , {details.location}
              </Typography>
              <Typography style={{ fontWeight: "bold" }} variant="h4">
                {details.blogName} 
              </Typography>
              <Typography  sx={{ pt: 2 ,textAlign:"justify",color:"#333"}} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed. Eiusmod tempor. incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam, uis nostrud exerc itation ullamco. Laboris nisi. ut aliquip ex ea commodo consequat. Duis aute irure dolr. inreprehen derit in voluptate velit esse cillum dolore. Eu fugiat nulla pariatur. Excep teur sint occaecat non proident, sunt in culpa qui officia deserunt mollit anim idlaborum. Sed ut persp iciatis unde omnis iste natus error sit. voluptatem accusantium doloremque laudantium, totam rem aperiam. Architecto beatae vitae dicta sunt explicabo.Eu fugiat nulla pariatur. <br />
              <Typography variant="h5" sx={{textAlign:"center",fontWeight:"bold",color:"#4d8150",py:4}}>
              "BUILD A LIFESTYLE AROUND YOUR BRAND,<br /> AND THE AUDIENCE WILL FOLLOW."
              </Typography>
              <br /> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit sed. Eiusmod tempor. incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam, uis nostrud exerc itation ullamco. Laboris nisi. ut aliquip ex ea commodo consequat. Duis aute irure dolr. inreprehen derit in voluptate velit esse cillum dolore. Eu fugiat nulla pariatur. <br />
              <br /> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit sed. Eiusmod tempor. incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam, uis nostrud exerc itation ullamco. Laboris nisi. ut aliquip ex ea commodo consequat. Duis aute irure dolr. inreprehen derit in voluptate velit esse cillum dolore. Eu fugiat nulla pariatur.
              </Typography>
              
            </Grid>
          </Grid>
          <Divider/>
          <Box sx={{display:"flex",flexDirection:"column",textAlign:"left",pt:8}}>
             <Typography variant="h6" sx={{pb:4}}>
                 Post A Comment
             </Typography>
              <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          defaultValue="Write Your Comment"
        />
             <Box sx={{display:"flex",gap:4,pt:2}}>
             <TextField type="text" fullWidth id="standard-basic" label="Name" variant="outlined" />
              <TextField fullWidth id="standard-basic" label="Email" variant="outlined" />
              <TextField fullWidth id="standard-basic" label="Website" variant="outlined" />
             </Box>
             <Box>
                 <button className="ourButton">Comment</button>
             </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Details;
