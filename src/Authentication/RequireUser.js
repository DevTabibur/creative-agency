import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import Loader from "../Shared/Loader/Loader";

const RequireUser = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // it is necessary for rendering the element with loader
  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireUser;
