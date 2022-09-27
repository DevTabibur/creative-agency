import React from "react";

const PaymentDetails = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
          See Order's<span className="text-secondary"> Payment</span>
        </h1>
        <div className="grid md:grid-cols-1 gap-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="font-serif text-accent font-semibold">Name</th>
                  <th className="font-serif text-accent font-semibold">
                    Email
                  </th>

                  <th className="font-serif text-accent font-semibold">
                    Service Title
                  </th>
                  <th className="font-serif text-accent font-semibold">
                    Project Details
                  </th>
                  <th className="font-serif text-accent font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <ShowPayment/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;

const ShowPayment = ({}) => {
  return (
    <>
      <tr>
        <td>Topu</td>
        <td>abc@gmail.com</td>
        <td>Graphic Design</td>
        <td>44</td>
        <td>
          <button className="btn btn-sm btn-success">Pending</button>
        </td>
      </tr>
    </>
  );
};
