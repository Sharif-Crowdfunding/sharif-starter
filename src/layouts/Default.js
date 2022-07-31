import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../providers/authentication";

const DefaultLayout = ({ children, noNavbar = false }) => {
  const [, isLoggedIn] = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div >
      {children}
    </div>
  );
};

export default DefaultLayout;
