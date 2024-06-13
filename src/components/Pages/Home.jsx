import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import i1 from "../../assets/img/w1seeds.jpeg";
import i2 from "../../assets/img/w2seeds.jpeg";
import i3 from "../../assets/img/w3seeds.jpeg";
import i4 from "../../assets/img/w4seeds.jpeg";
import i5 from "../../assets/img/w5seeds.jpeg";

const Home = () => {
  return (
    <>
      <Box className="homeswiper">
        <swiper-container
            className="swiper-container1"
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          pagination-clickable="true"
          pagination-dynamic-bullets="true"
          autoplay-delay="2000"
          autoplay-disable-on-interaction="false"
          center-slides="true"
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "15px",
          }}
        >
          <swiper-slide lazy="true"  className="swiper-slide1">
            <img src={i1} loading="lazy" alt="" className="img1"/>
          </swiper-slide>

          <swiper-slide lazy="true" className="swiper-slide1">
            <img loading="lazy" src={i5} alt="" className="img1"/>
          </swiper-slide>

          <swiper-slide lazy="true" className="swiper-slide1">
            <img loading="lazy" src={i3} alt="" className="img1"/>
          </swiper-slide>
          <swiper-slide lazy="true" className="swiper-slide1">
            <img loading="lazy" src={i4} alt="" className="img1"/>
          </swiper-slide>
        </swiper-container>
        <div className="nav-btn custom-prev-button">
          {/* <!-- https://feathericons.dev/?search=arrow-left&iconset=feather --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <line x1="19" x2="5" y1="12" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </div>

        <div className="nav-btn custom-next-button">
          {/* <!-- https://feathericons.dev/?search=arrow-right&iconset=feather --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <line x1="5" x2="19" y1="12" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Box>
          <Typography variant="h3" align="center" className="nameMain">
            Welcome To<span className="name1"> Krishna</span>
            <span className="name2"> Export</span>
          </Typography>
        </Box>
        <Box className="aboutHome" align="center" >
        <Divider sx={{marginBottom:2,marginTop:2}}></Divider>
          <Typography >
            <span className="subname">Krishna export</span> is a manufacturer and exporter of agricultural items
            from Gujarat, India. Now we have represented ourselves in the
            international market as a <span className="subname">premium exporter</span>. We are a professionally
            managed firm powered by a team of committed professionals who
            understand the diverse tastes and demands of our esteemed clients
            across the globe.
          </Typography>

        </Box>
      </Box>
    </>
  );
};

export default Home;
