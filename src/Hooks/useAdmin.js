import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
const navigate = useNavigate()
  useEffect(() => {
    const email = user?.email;
    if (email) {
      const url = `https://creative-agency-server.onrender.com/admin/${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403){
            navigate("/login")
            signOut(auth);
            localStorage.removeItem("accessToken")
          }
          return res.json()
        })
        .then((data) => {
          // console.log("check admin hooks inside", data);
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user, navigate]);
  return [admin, adminLoading];
};

export default useAdmin;
