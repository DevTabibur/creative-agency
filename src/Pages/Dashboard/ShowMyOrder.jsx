import React from 'react'
import Swal from 'sweetalert2';

const ShowMyOrder = ({ order, setCheckout }) => {
    const { email, name, serviceName, projectFile, projectDetails, price, _id } =
      order;
    const cancelOrder = (id) => {
      const proceed = window.confirm("Are you want to Cancel Your Order?");
      if (proceed) {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Order Deleted",
                icon: "success",
              });
            }
          });
      }
    };
    return (
      <>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body text-left">
            <p className="text-sm text-gray-500">{email}</p>
            <p className="text-sm text-gray-500">Name : {name && name}</p>
            <h2 className="card-title">{serviceName}</h2>
            <p className="text-sm text-gray-500">{projectDetails}</p>
            <p className="text-sm text-gray-500">Price : ${price}</p>
            <a
              target="_blank"
              href={projectFile}
              className="text-sm hover:underline block"
            >
              Go To Project File
            </a>
            <div className="card-actions justify-end mt-4">
              <label
                htmlFor="checkout-modal"
                className="btn btn-secondary"
                onClick={()=> setCheckout(order)}
              >
                Pay Now
              </label>
              <button
                className="btn btn-primary"
                onClick={() => cancelOrder(_id)}
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ShowMyOrder;