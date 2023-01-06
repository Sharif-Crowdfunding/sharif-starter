import { Container } from "@mui/material";
import React from "react";
import NewProjectForm from "../../components/sections/projects/NewProjectForm";

const NewProject = () => {
  return (
    <>
      <Container>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <NewProjectForm />
        </div>
      </Container>
    </>
  );
};

export default NewProject;
