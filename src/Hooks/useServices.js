import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const useServices = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:5000/services`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        // if(data.message === 'forbidden'  || data.message === 'UnAuthorized'){
        //   localStorage.removeItem("accessToken")
        //   signOut(auth)
        //   navigate("/login")
        // }
        setServices(data);
      });
  }, [services]);
  return [services];
};

export default useServices;
