import React from "react";
import "./Services.css";

import useServices from "../../Hooks/useServices";
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
  const { serviceName, projectDetails, image, price } = service;
  return (
    <>
      <div className="card w-full shadow-xl border rounded-none">
          <div className="relative w-full">
          <img className="p-4 rounded-lg w-full mx-auto" src={image} alt="dynamic_image" />
          </div>
        <div className="card-body justify-center items-center">
          <h2 className="card-title font-serif font-accent">{serviceName}</h2>
          <p><small>Price: ${price}</small></p>
          <p className="text-md font-serif text-center">{projectDetails.slice(0, 50)}</p>
        </div>
      </div>
    </>
  );
};
