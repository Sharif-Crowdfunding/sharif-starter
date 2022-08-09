import { Container } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";


import { useAuth } from "../../providers/authentication";
import "./dashboard.css";
import MyProjects from "./MyProjects";
import NewProject from "./NewProjects";
const Dashboard = () => {
  const params = useParams();
  function GetSection({ section }) {
    switch (section) {
      case 'projects':
        return <MyProjects />
      case 'new-project':
        return <NewProject />
      default:
        return <></>;
    }
  }

  return (
    <>
      <Container>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <GetSection section={params.section} />
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
