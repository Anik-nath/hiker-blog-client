import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import slider1 from "../../../images/slider1.jpg"
import slider2 from "../../../images/slider2.jpg"
import slider3 from "../../../images/slider3.jpg"

// Import Swiper styles
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Typography } from "@mui/material";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Banner = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <div className="bannerFrame">
           <div className="bannerText">
                <h1>EVERYDAY URBAN CONCRETE JUNGLE</h1>
                <Typography>Lorem ipsum, dolor consectetur adipisicing elit. Possimus eos voluptatem perferendis, <br /> ipsam quia laboriosam suscipit odit doloremque. Cumque, nobis!</Typography>
                <button className="ourButton">Read More</button>
           </div>
            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-bottom.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <div className="bannerFrame">
                <div className="bannerText">
                <h1>AMAZON RAINFOREST EXPERIENCE</h1>
                <Typography>Lorem ipsum, dolor consectetur adipisicing elit. Possimus eos voluptatem perferendis, <br /> ipsam quia laboriosam suscipit odit doloremque. Cumque, nobis!</Typography>
                <button className="ourButton">Read More</button>
           </div>
            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-bottom.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <div className="bannerFrame">
          <div className="bannerText">
                <h1>CLIMBING IN THE SWISS ALPS</h1>
                <Typography>Lorem ipsum, dolor consectetur adipisicing elit. Possimus eos voluptatem perferendis, <br /> ipsam quia laboriosam suscipit odit doloremque. Cumque, nobis!</Typography>
                <button className="ourButton">Read More</button>
           </div>
            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-bottom.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
