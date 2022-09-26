import React from "react";
import Hero from "../../Shared/Hero/Hero";
import Stat from "../../Shared/Stat/Stat";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Stat/> */}
      <Services/>
    </>
  );
};

export default Home;
