import React from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainNavigation from "../common/navigation";

import { useAuth } from "../providers/authentication";

const DefaultLayout = ({ children }) => {
  const [, isLoggedIn] = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div >
      <MainNavigation />
      {children}
      <ToastContainer />
    </div>
  );
};

export default DefaultLayout;
