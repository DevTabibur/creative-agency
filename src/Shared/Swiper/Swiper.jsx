import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./Swiper.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import Slider1 from "../../Assets/Images/carousel-1.png";
import Slider2 from "../../Assets/Images/carousel-2.png";
import Slider3 from "../../Assets/Images/carousel-3.png";
import Slider4 from "../../Assets/Images/carousel-4.png";
import Slider5 from "../../Assets/Images/carousel-5.png";

const SwiperCarousel = () => {
  return (
    <div className="container mx-auto px-4">
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="" src={Slider1} alt="Slider1" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="" src={Slider2} alt="Slider2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={Slider4} alt="Slider4" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={Slider5} alt="Slider4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  );
};

export default SwiperCarousel;
