import React from "react";

const Loader = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <button className="btn btn-accent loading">Processing...</button>
        </div>
      </div>
    </>
  );
};

export default Loader;
