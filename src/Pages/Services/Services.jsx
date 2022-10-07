import React from "react";
import "./Services.css";

import useServices from "../../Hooks/useServices";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const [services] = useServices();
  // console.log('first, services', services)
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12">
        Provide awesome <span className="text-secondary">services</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <ShowServices service={service} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Services;

const ShowServices = ({ service }) => {
  const [user] = useAuthState(auth);
  const { _id, serviceName, projectDetails, image, price } = service;
  const navigate = useNavigate();
  const handleOrder = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/dashboard/order/${id}`);
    }
  };
  return (
    <>
      <div className="card w-full shadow-xl border rounded-none">
        <div className="relative w-full">
          <img
            className="p-4 rounded-lg w-28 text-center mx-auto"
            src={image}
            alt="dynamic_image"
          />
        </div>
        <div className="card-body justify-center items-center">
          <h2 className="card-title font-serif font-accent">{serviceName}</h2>
          <p className="text-md font-sans text-center text-gray-500">
            {projectDetails.slice(0, 250)}...
          </p>
          <p className="text-md font-sans text-center text-gray-900 font-semibold">
            Price : ${price}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-accent text-primary"
              onClick={() => handleOrder(_id)}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
