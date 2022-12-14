import React, { useEffect, useState } from "react";

const useOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://creative-agency-server.onrender.com/order`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("my orders hooks inside", data);
        setOrders(data);
      });
  }, [orders]);
  return [orders];
};

export default useOrder;
