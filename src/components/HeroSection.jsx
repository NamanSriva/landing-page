import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

// Custom arrow components
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black", // Customize arrow appearance
        borderRadius: "50%",
        margin:"20px",
        padding: "20px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black", // Customize arrow appearance
        borderRadius: "50%",
        margin:"20px",
        padding: "20px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />, // Custom left arrow
    nextArrow: <NextArrow />, // Custom right arrow
  };

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
      <Slider {...settings}>
        {MyCollection.map((item) => (
          <Box
            key={item.label}
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
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
