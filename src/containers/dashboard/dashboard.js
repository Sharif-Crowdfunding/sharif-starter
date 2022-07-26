import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


import { useAuth } from "../../providers/authentication";
import "./dashboard.css";
const Dashboard = () => {
  const [user, _] = useAuth();
  const params = useParams();
  const [detailsId, setDetailsId] = useState();
  function GetCustomerSection({ section }) {
    switch (section) {
      default:
        return <></>;
    }
  }

  return (
    <>
      <Container fluid>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          {user.type === "CUSTOMER" ? (
            <GetCustomerSection section={params.section} />
          ) : (
            <GetCustomerSection section={params.section} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
