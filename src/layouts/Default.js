import React from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainNavigation from "../common/navigation";
import { useAuth } from "../providers/auth";


const DefaultLayout = ({ children }) => {
  const { user } = useAuth();
  if (user.isAuthenticated) {
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
