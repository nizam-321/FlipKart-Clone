'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <div
     className="hidden sm:flex absolute z-10 left-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute z-10 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md"
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
    dots: true, // dots dikh rahe hain
    infinite: true, // last ke baad first aayega
    speed: 500, // half second me slide change
    autoplay: true, // khud se chalta hai
    autoplaySpeed: 3000, // har 3 sec me nayi slide
    slidesToShow: 1,  // ek baar me ek image
    slidesToScroll: 1, // ek baar me ek slide move
    arrows: true, // left/right arrow dikhte hain
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full mt-6 overflow-visible pb-2">
      <Slider {...settings}>
        {bannerImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Banner ${index + 1}`}
             className="w-full h-[160px] sm:h-[300px] md:h-[400px] md:h-auto  object-cover" 
             />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
