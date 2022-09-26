import React from "react";
import "./Projects.css";
import useProjects from "../../Hooks/useProjects";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperCarousel from "../../Shared/Swiper/Swiper";

const Projects = () => {
  const [projects] = useProjects();
  // console.log("first", projects);
  return (
    <div className="bg-accent">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-white">
          Here are some of <span className="text-secondary">our works</span>
        </h1>
        <SwiperCarousel />
      </div>
    </div>
  );
};

export default Projects;
