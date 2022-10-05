import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.init";
import useOrder from "../../Hooks/useOrder";
import Loader from "../../Shared/Loader/Loader";
import CheckoutForm from "./CheckoutForm";
import CheckOutModal from "./CheckOutModal";
import ShowMyOrder from './ShowMyOrder'

const MyOrder = () => {
  const [orders] = useOrder();
  const [user, loading] = useAuthState(auth);
  const [checkout, setCheckout] = useState(null);

  const filterEmailData = orders.filter((order) => order.email === user?.email);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
        Manage{" "}
        <span className="text-secondary">
          {" "}
          Checkout ( {filterEmailData.length} )
        </span>
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {filterEmailData.map((order, idx) => (
          <ShowMyOrder key={idx} order={order} setCheckout={setCheckout}/>
        ))}
      </div>

      {checkout && (
        <CheckOutModal key={1} checkout={checkout} />
      )}

    </div>
  );
};

export default MyOrder;


