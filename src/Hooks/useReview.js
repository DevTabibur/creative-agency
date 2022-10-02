import React, { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/review`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("inside review hooks", data);
        setReviews(data);
      });
  }, [reviews]);
  return [reviews];
};

export default useReview;
