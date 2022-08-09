import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyProjectCard from "../../components/myprojects/MyProjectCard";

import { useAuth } from "../../providers/authentication";
const MyProjects = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Typography variant="h3">پروژه های شما</Typography>
          <br />
          <MyProjectCard />
          <MyProjectCard />
          <Button
            sx={{ mt: 2, width: "80%" }}
            variant="contained"
            onClick={() => navigate("/dashboard/new-project")}
          >
            <Typography variant="h5">ثبت پروژه جدید</Typography>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default MyProjects;
