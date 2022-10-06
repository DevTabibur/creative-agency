import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotFoundPic from "../../Assets/Images/404.jpg";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <>
      {/* <div className='container mx-auto px-4'> */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={NotFoundPic}
            className="lg:max-w-lg w-full rounded-lg shadow-2xl"
            alt="not found"
          />
          <div>
            <p className="py-6 text-white">
              Opps! This page is'nt available anymore
            </p>
            <button onClick={()=>navigate(-1)} className="btn btn-accent text-primary w-full">Go Back</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default NotFound;