import React from "react";
import "./Hero.css";
import HeroImg from "../../Assets/Images/Frame.png";

const Hero = () => {
  return (
    <div className="curve-bg relative">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex flex-row gap-4">
          <div className="basis-1/2 w-full relative lg:order-last">
            <img src={HeroImg} className="w-full" alt="Hero_img" />
          </div>
          <div className="basis-1/2  hero-content">
            <div>
              <h2 className="text-5xl font-bold font-sans text-accent mb-4">
                Let’s Grow Your Brand To The Next Level
              </h2>
              <p className="mb-6 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat{" "}
              </p>
              <button className="btn btn-accent px-12">Hire Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
