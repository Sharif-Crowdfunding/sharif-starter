import React from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import { useAuth } from "../providers/authentication";
import { CustomerSidebar, SpecialistSidebar } from "./options";

const UserLayout = ({ children, noNavbar = false }) => {
  const [user, isLoggedIn] = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else if (user.type === "ADMIN") {
    return <Navigate to="/admin" />;
  }
  return (
    <Container fluid>
      <MainNavbar user={user} />
      <Row>
        <MainSidebar
          sidebarItems={
            user.type === "CUSTOMER" ? CustomerSidebar : SpecialistSidebar
          }
        />
        {children}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default UserLayout;
