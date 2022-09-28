import React from "react";
import Hero from "../../Shared/Hero/Hero";
import Stat from "../../Shared/Stat/Stat";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Stat/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </>
  );
};

export default Home;
