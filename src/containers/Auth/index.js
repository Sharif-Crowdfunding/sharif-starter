import { Button } from "@mui/material";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Authenticate = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div style={{ padding: 20, position: "absolute", left: 0 }}>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          onClick={() => navigate("/")}
        >
          <IoArrowBack />
        </Button>
      </div>
      {params.section === "register" ? (
        <SignUp />
      ) : params.section === "login" ? (
        <SignIn />
      ) : (
        <ForgotPassword />
      )}
    </React.Fragment>
  );
};

export default Authenticate;
