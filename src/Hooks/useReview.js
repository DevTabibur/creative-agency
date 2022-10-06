import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          signOut(auth)
          localStorage.removeItem('accessToken');
          navigate("/login")
        }
        return res.json()
      })
      .then((data) => {
        // console.log("inside review hooks", data);
        setReviews(data);
      });
  }, [reviews, navigate]);
  return [reviews];
};

export default useReview;
