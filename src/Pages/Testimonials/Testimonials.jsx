import React from "react";
import "./Testimonials.css";
import Client1 from "../../Assets/Images/customer-1.png";
import Client2 from "../../Assets/Images/customer-2.png";
import Client3 from "../../Assets/Images/customer-3.png";

const Testimonials = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
          Clients<span className="text-secondary"> Feedback</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-4">

          <div className="border p-6">
            <div className="image-box flex">
              <div className="img-div relative">
                <img className="w-20" src={Client1} alt="client1" />
              </div>
              <div className="info ml-4 mt-4">
                <h2 className="text-xl font-semibold font-serif text-accent">
                  Nash Patrick
                </h2>
                <p className="font-semibold  text-accent">CEO, Manpol</p>
              </div>
            </div>
            <p className="font-serif font-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
          </div>

          <div className="border p-6">
            <div className="image-box flex">
              <div className="img-div relative">
                <img className="w-20" src={Client2} alt="client2" />
              </div>
              <div className="info ml-4 mt-4">
                <h2 className="text-xl font-semibold font-serif text-accent">
                Miriam Barron
                </h2>
                <p className="font-semibold  text-accent">CEO, Manpol</p>
              </div>
            </div>
            <p className="font-serif font-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
          </div>

          <div className="border p-6">
            <div className="image-box flex">
              <div className="img-div relative">
                <img className="w-20" src={Client3} alt="client3" />
              </div>
              <div className="info ml-4 mt-4">
                <h2 className="text-xl font-semibold font-serif text-accent">
                Bria Malone
                </h2>
                <p className="font-semibold  text-accent">CEO, Manpol</p>
              </div>
            </div>
            <p className="font-serif font-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
