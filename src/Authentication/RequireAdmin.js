import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loader from "../Shared/Loader/Loader";

const RequireAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  console.log('RequireAdmin', admin)

  const location = useLocation();
  if (loading || adminLoading) {
    return <Loader />;
  }

  if (!user || !admin) {
    // signOut(auth)
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAdmin;
