import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ checkout }) => {
  const { _id, price, email, name, serviceName } = checkout;

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionID] = useState([]);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const url = `https://creative-agency-server.onrender.com/create-payment-intent`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // how user can pay, this is the way

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      // if payment is succeed
      setCardError("");
      // console.log("payment", paymentIntent);
      setTransactionID(paymentIntent.id);
      setSuccess("Your payment is completed");

      // PATCH => store payment on database
      const payment = {
        serviceID: _id,
        transactionID: paymentIntent.id,
      };
      const url = `https://creative-agency-server.onrender.com/order/${_id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-accent btn-sm font-semibold font-serif  mt-8 shadow-lg text-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 text-sm font-serif">{cardError}</p>
      )}
      {success && (
        <div>
          <p className="text-green-500 text-sm font-serif">{success}</p>
          <p className="text-orange-500 text-sm font-serif">
            Your transactionID : {transactionID}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
