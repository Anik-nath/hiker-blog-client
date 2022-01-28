import { Grid, Typography, Container, Rating, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Banner from "../../Shared/Banner/Banner";
import FeaturedBlog from "../FeaturedBlog/FeaturedBlog";
import place1 from "../../../images/holiday-place-2.jpg";
import place2 from "../../../images/holiday-place-3.jpg";
import place3 from "../../../images/holiday-place-4.jpg";
import place4 from "../../../images/holiday-place-5.jpg";
import place5 from "../../../images/holiday-place-6.jpg";
import place6 from "../../../images/holiday-place-8.jpg";
import image1 from "../../../images/h1-img-07.png";
import image2 from "../../../images/h1-img-08.png";
import image3 from "../../../images/h1-img-09.png";
import image4 from "../../../images/h1-img-10.png";
import image5 from "../../../images/h1-img-11.png";
import image6 from "../../../images/h1-img-12.png";
import blogPost from "../../../images/blog-post-img-02.jpg";
import EditIcon from '@mui/icons-material/Edit';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="home-background">
        <Box sx={{ py: 8 }}>
          <Container>
            <Grid container spacing={{ xs: 2, md: 2 }}>
              <Grid item md={2} sm={4} xs={4}>
                <img style={{ width: "50%" }} src={image1} alt="" />
                <Typography sx={{ color: "GrayText" }} variant="body2">
                  2 destination
                </Typography>
                <Typography variant="h6">Advanture</Typography>
              </Grid>
              <Grid item md={2} sm={4} xs={4}>
                <img style={{ width: "50%" }} src={image2} alt="" />
                <Typography sx={{ color: "GrayText" }} variant="body2">
                  3 destinations
                </Typography>
                <Typography variant="h6">BEACHES</Typography>
              </Grid>
              <Grid item md={2} sm={4} xs={4}>
                <img style={{ width: "50%" }} src={image3} alt="" />
                <Typography sx={{ color: "GrayText" }} variant="body2">
                  5 destinations
                </Typography>
                <Typography variant="h6">Camping</Typography>
              </Grid>
              <Grid item md={2} sm={4} xs={4}>
                <img style={{ width: "50%" }} src={image4} alt="" />
                <Typography sx={{ color: "GrayText" }} variant="body2">
                  4 destinations
                </Typography>
                <Typography variant="h6">Frindly</Typography>
              </Grid>
              <Grid item md={2} sm={4} xs={4}>
                <img style={{ width: "50%" }} src={image5} alt="" />
                <Typography sx={{ color: "GrayText" }} variant="body2">
                  2 destinations
                </Typography>
                <Typography variant="h6">Low Budget</Typography>
              </Grid>
              <Grid item md={2} sm={4} xs={4}>
                <img style={{ width: "50%" }} src={image6} alt="" />
                <Typography sx={{ color: "GrayText" }} variant="body2">
                  6 destinations
                </Typography>
                <Typography variant="h6">Popular</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container>
        <Box sx={{ py: 8 }}>
          <Grid container sx={{ px: 4 }} spacing={{ xs: 2, md: 2 }}>
            <Grid sx={{display:'flex',textAlign:"left"}} item md={8} sm={6} xs={12}>
            <div>
                <img style={{width:"90%"}} src={blogPost} alt="" />
              </div>
             <div>
             <Typography variant="h6" sx={{ fontWeight: "bold", pb: 4 }}>
              TOP HIKING TRAILS IN THE PERUVIAN AMAZON RAIN FOREST
              </Typography>
              <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sed autem nisi saepe aliquam. Porro quasi vero harum eum maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
              <Typography sx={{color:"gray",py:2,display:"flex",alignItems:"center",justifyContent:"flex-start"}} variant="body2"><EditIcon/> by john </Typography>
             </div>
             

            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "bold", pb: 4 }}>
                TOP RATED <span style={{ color: "#4d8150" }}>SPOTS</span>
              </Typography>
              <Box>
                <Box sx={{pt:1}}>
                  <Grid container spacing={{ xs: 2, md: 2 }}>
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      sx={{ position: "relative" }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={place1}
                        alt="place1"
                      />
                      <Box
                        sx={{ position: "absolute", top: "50%", left: "20%" }}
                      >
                        <Rating size="small" name="disabled" value={5} />
                        <small style={{ color: "#fff" }}>london</small>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      sx={{ position: "relative" }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={place2}
                        alt="place2"
                      />
                      <Box
                        sx={{ position: "absolute", top: "50%", left: "20%" }}
                      >
                        <Rating size="small" name="disabled" value={5} />
                        <small style={{ color: "#fff" }}>Paris</small>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      sx={{ position: "relative" }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={place3}
                        alt="place3"
                      />
                      <Box
                        sx={{ position: "absolute", top: "50%", left: "20%" }}
                      >
                        <Rating size="small" name="disabled" value={5} />
                        <small style={{ color: "#fff" }}>Swizerland</small>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      sx={{ position: "relative" }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={place4}
                        alt="place4"
                      />
                      <Box
                        sx={{ position: "absolute", top: "50%", left: "20%" }}
                      >
                        <Rating size="small" name="disabled" value={5} />
                        <small style={{ color: "#fff" }}>Finland</small>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      sx={{ position: "relative" }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={place5}
                        alt="place5"
                      />
                      <Box
                        sx={{ position: "absolute", top: "50%", left: "20%" }}
                      >
                        <Rating size="small" name="disabled" value={5} />
                        <small style={{ color: "#fff" }}>Canada</small>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      sx={{ position: "relative" }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={place6}
                        alt="place6"
                      />
                      <Box
                        sx={{ position: "absolute", top: "50%", left: "20%" }}
                      >
                        <Rating size="small" name="disabled" value={5} />
                        <small style={{ color: "#fff" }}>Brazil</small>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              
            </Grid>
          </Grid>
        </Box>
       
            <FeaturedBlog></FeaturedBlog>
        </Container>
        <Divider></Divider>
      </div>
    </div>
  );
};

export default Home;
