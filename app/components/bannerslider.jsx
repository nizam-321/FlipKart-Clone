'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const bannerImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
  "/images/banner5.jpg",
  "/images/banner6.jpg",
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full mt-6 overflow-hidden">
      <Slider {...settings}>
        {bannerImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Banner ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
