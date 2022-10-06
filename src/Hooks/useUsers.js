import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://creative-agency-server.onrender.com/users`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
       if(res.status === 401 || res.status === 403){
        signOut(auth);
        navigate("/login")
        localStorage.removeItem("accessToken")
       }
        return res.json();
      })
      .then((data) => {
        // console.log("inside use users hooks", data);
        // if(data.message === 'forbidden'  || data.message === 'UnAuthorized'){
        //   localStorage.removeItem("accessToken")
        //   signOut(auth)
        //   navigate("/login")
        // }
        setUsers(data);
      });
  }, [users, navigate]);
  return [users];
};

export default useUsers;
