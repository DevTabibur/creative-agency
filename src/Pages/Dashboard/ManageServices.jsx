import React from "react";
import useServices from "../../Hooks/useServices";
import Swal from 'sweetalert2'

const ManageServices = () => {
  const [services] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to DELETE?");
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.acknowledged){
            Swal.fire({
              title: 'Data DELETED !',
              icon: 'success',
            })
          }
        });
    }
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
        Manage your<span className="text-secondary"> Services</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <ShowServices
            key={idx}
            service={service}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageServices;

const ShowServices = ({ service, handleDelete }) => {
  const { serviceName, image, projectDetails } = service;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Service_image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>{projectDetails.slice(0, 60)}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-sm btn-secondary font-semibold font-serif"
              onClick={() => handleDelete(service._id)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
