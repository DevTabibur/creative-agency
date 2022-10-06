import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import Loader from "../Shared/Loader/Loader";

const useToken = (user) => {
  const [token, setToken] = useState();
  const [user2, loading] = useAuthState(auth);
  const name = user2?.displayName;


  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email, name: name };

    if (email) {
      const url = `https://creative-agency-server.onrender.com/users/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("use token inside data", data);
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user, user2, name]);

  return [token];
};

export default useToken;
