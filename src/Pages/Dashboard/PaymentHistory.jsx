import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useOrder from "../../Hooks/useOrder";
import Loader from "../../Shared/Loader/Loader";

const PaymentHistory = () => {
  const [orders] = useOrder();
  const [user, loading] = useAuthState(auth);
  const [checkout, setCheckout] = useState(null);

  const filterEmailData = orders.filter(
    (order) => order.email === user?.email && order.paid === true
  );

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
          Completed Payment{" "}
          <span className="text-secondary">
            {" "}
            History ( {filterEmailData.length} )
          </span>
        </h1>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Email</th>
                <th>Service Name</th>
                <th>Transaction ID</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filterEmailData.map((history, idx) => (
                <ShowPaymentHistory history={history} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;

const ShowPaymentHistory = ({ history }) => {
  const { _id, paid, price, serviceName, transactionId, email } = history;

  return (
    <>
      <tr>
        <td>{email}</td>
        <td>{serviceName}</td>
        <td>{transactionId}</td>
        <th>${price}</th>
      </tr>
    </>
  );
};
