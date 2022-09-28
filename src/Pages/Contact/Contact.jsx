import React, { useRef } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    emailjs
      .sendForm(
        "service_sfm8pqs",
        "template_4wpv3xa",
        form.current,
        "rd2NWclvqL6ALdj-T"
      )
      .then(
        (result) => {
          Swal.fire({
            title: 'Mail Sent!',
            icon: 'success',
          })
          e.target.reset()
        },
        (error) => {
          Swal.fire({
            title: 'Mail was not Sent!',
            icon: 'error',
          })
        }
      );
  };

  //   copyright year
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="hero content">
            <div>
              <h1 className="md:text-7xl font-serif font-semibold font-accent text-center mb-4 text-accent">
                Let us handle your{" "}
                <span className="text-secondary">project, professionally.</span>
              </h1>
              <p className="font-mono">
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </p>
            </div>
          </div>

          <div>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
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

              {/* message */}

              <div className="form-control w-full">
                <textarea
                  type="text"
                  placeholder="Write message*"
                  className="textarea textarea-bordered textarea-secondary w-full font-mono"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is Required",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.message?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.message.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full">
                <input
                  className="btn btn-accent text-primary mt-6 font-serif font-semibold"
                  type="submit"
                  value="SUBMIT"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright mt-28 text-center">
        <p className="font-semibold font-serif text-accent">
          @{year} - all rights reserved by devTabibur
        </p>
      </div>
    </div>
  );
};

export default Contact;
