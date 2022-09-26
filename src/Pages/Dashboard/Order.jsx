import React from "react";
import { useForm } from "react-hook-form";

const Order = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    console.log(data);

    const url = `http://localhost:5000/dashboard/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("post data successfully", data);
      });
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
          Give us <span className="text-secondary">Your Order</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4">
            {/* email */}
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Your Email address*"
                className="input input-bordered input-secondary w-full font-mono"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid Email",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* name / company name */}

            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Your Name / Company's Name*"
                className="input input-bordered input-secondary w-full font-mono"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* service name */}

            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Service Name / Title*"
                className="input input-bordered input-secondary w-full font-mono"
                {...register("serviceName", {
                  required: {
                    value: true,
                    message: "Service Name / Title is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.serviceName?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.serviceName.message}
                  </span>
                )}
              </label>
            </div>

            {/* upload project file */}

            <div className="form-control w-full">
              <input
                type="text"
                placeholder="upload Project File (Project Online Link)*"
                className="input input-bordered input-secondary w-full font-mono"
                {...register("projectFile", {
                  required: {
                    value: true,
                    message: "Project File is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.projectFile?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.projectFile.message}
                  </span>
                )}
              </label>
            </div>
            {/* upload project details */}

            <div className="form-control w-full">
              <textarea
                type="text"
                placeholder="Write Project Details*"
                className="textarea textarea-bordered textarea-secondary w-full font-mono"
                {...register("projectDetails", {
                  required: {
                    value: true,
                    message: "Project Details is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.projectDetails?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.projectDetails.message}
                  </span>
                )}
              </label>
            </div>

            {/* price */}

            <div className="form-control w-full">
              <input
                type="number"
                placeholder="Price*"
                className="input input-bordered input-secondary w-full font-mono"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <input
              className="btn btn-primary text-secondary mt-6 font-serif font-semibold"
              type="submit"
              value="ORDER"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Order;
