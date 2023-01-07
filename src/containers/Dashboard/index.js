import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Auction from "./Auction";

import "./dashboard.css";
import MyProjects from "./MyProjects";
import NewProject from "./NewProjects";
import Overview from "./Overview";
import Portfolio from "./Portfolio";
const Dashboard = () => {
  const params = useParams();
  function GetSection({ section }) {
    switch (section) {
      case "projects":
        return <MyProjects />;
      case "new-project":
        return <NewProject />;
      case "app":
        return <Overview />;
      case "portfolio":
        return <Portfolio />;
      case "auctions":
        return <Auction />;
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
