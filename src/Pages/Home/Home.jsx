import React from "react";
import Hero from "../../Shared/Hero/Hero";
import Stat from "../../Shared/Stat/Stat";
import SwiperCarousel from "../../Shared/Swiper/Swiper";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      {/* <Stat/> */}
      <Services/>
      <Projects/>
    </>
  );
};

export default Home;
