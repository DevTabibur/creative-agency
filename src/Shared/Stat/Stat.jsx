import React from "react";
import "./Stat.css";
import Slack from "../../Assets/Images/slack.png";
import Google from "../../Assets/Images/google.png";
import Uber from "../../Assets/Images/uber.png";
import AirBNB from "../../Assets/Images/airbnb.png";
import Netflix from "../../Assets/Images/netflix.png";

const Stat = () => {
  return (
    <>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap  text-center">
          <div class="md:w-1/5 sm:w-1/2 w-52">
            <div className="relative w-24 h-auto">
              <img className="w-full h-auto mt-4" src={Slack} alt="Slack" />
            </div>
          </div>
          <div class="p-4 md:w-1/5 sm:w-1/2 w-52">
            <div className="relative w-24 h-auto">
              <img className="w-full h-auto mt-4" src={Slack} alt="Slack" />
            </div>
          </div>
          <div class="p-4 md:w-1/5 sm:w-1/2 w-52">
            <div className="relative w-24 h-auto">
              <img className="w-full h-auto mt-4" src={Slack} alt="Slack" />
            </div>
          </div>
          <div class="p-4 md:w-1/5 sm:w-1/2 w-52">
            <div className="relative w-24 h-auto">
              <img className="w-full h-auto mt-4" src={Slack} alt="Slack" />
            </div>
          </div>
          <div class="p-4 md:w-1/5 sm:w-1/2 w-52">
            <div className="relative w-24 h-auto">
              <img className="w-full h-auto mt-4" src={Slack} alt="Slack" />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="md:flex justify-center  gap-4">
        <div className="relative w-24 h-auto">
          <img className="w-full h-auto mt-4" src={Slack} alt="Slack" />
        </div>
        <div className="relative w-24 h-auto">
          <img className="w-full h-auto mt-4" src={Google} alt="Google" />
        </div>
        <div className="relative w-24 h-auto">
          <img className="w-full h-auto" src={Uber} alt="Uber" />
        </div>
        <div className="relative w-24 h-auto">
          <img className="w-full h-auto mt-4" src={AirBNB} alt="AirBNB" />
        </div>
        <div className="relative w-24 h-auto">
          <img className="w-full h-auto" src={Netflix} alt="Netflix" />
        </div>
      </div> */}
    </>
  );
};

export default Stat;
