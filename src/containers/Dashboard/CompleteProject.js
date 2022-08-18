import { Container } from "@mui/material";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import CompleteProjectForm from "../../components/sections/projects/CompleteProjectForm";

const CompleteProject = () => {
  const params = useParams();
  if (!params.id) {
    return <Navigate to={"/dashboard/projects"} />;
  }
  return (
    <>
      <Container>
          <CompleteProjectForm projectId={params.id} />
      </Container>
    </>
  );
};

export default CompleteProject;
