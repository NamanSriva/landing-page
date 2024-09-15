import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import Box from "@mui/material/Box";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";


const MyCollection = [
  {
    label: "First Picture",
    imgPath: slide1,
  },
  {
    label: "Second Picture",
    imgPath: slide2,
  },
  {
    label: "Third Picture",
    imgPath: slide3,
  },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%", 
        height: "100vh", 
        margin: "0", 
        padding: "0", 
        overflow: "hidden", 
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={0} 
        slidesPerView={1} 
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        style={{ height: "100%" }} 
      >
        {MyCollection.map((item) => (
          <SwiperSlide key={item.label}>
            <Box
              component="img"
              sx={{
                width: "100%", 
                height: "100vh", 
                objectFit: "cover", 
                display: "block", 
              }}
              src={item.imgPath}
              alt={item.label}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
