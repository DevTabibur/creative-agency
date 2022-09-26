import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    console.log(data);

    const url = `http://localhost:5000/dashboard/services`;
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
          Add <span className="text-secondary">Services</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4">
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

            {/* upload image online link */}

            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Image ( Image Online Link with https:// )*"
                className="input input-bordered input-secondary w-full font-mono"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image Link is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.image.message}
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
          </div>

          <div className="form-control w-full">
            <input
              className="btn btn-primary text-accent mt-6 font-serif font-semibold"
              type="submit"
              value="ADD SERVICE"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddServices;
