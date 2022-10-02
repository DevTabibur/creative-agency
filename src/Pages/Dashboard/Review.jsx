import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Review = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    // console.log(data);

    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("post review successfully", data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Review Submitted !",
            icon: "success",
          });
          e.target.reset();
        }
      });
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
          Give us <span className="text-secondary">Your Review</span>
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

            {/* description */}

            <div className="form-control w-full">
              <textarea
                type="text"
                placeholder="Write Review*"
                className="textarea textarea-bordered textarea-secondary w-full font-mono"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <input
              className="btn btn-primary text-secondary mt-6 font-serif font-semibold"
              type="submit"
              value="SUBMIT REVIEW"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Review;
