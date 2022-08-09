import React from "react";
import { Navigate } from "react-router-dom";
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
    </div>
  );
};

export default DefaultLayout;
