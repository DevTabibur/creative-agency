import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L4JVuA39z7TXqPSg5UDBbSy1LBrOiJpXPYtM1YLg9fScUUnADN0zFqetXNg7HGkgO0go5P0CcXWw0SgZg5Hkps500SD41aRrD"
);

const CheckOutModal = ({  checkout }) => {
  const { _id, price, email, name, serviceName } = checkout;

  return (
    <>
      <input type="checkbox" id="checkout-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-accent">
          <label
            htmlFor="checkout-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-4 text-center text-primary">
            Please Checkout for {serviceName}
          </h3>
          <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-12">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutModal;
