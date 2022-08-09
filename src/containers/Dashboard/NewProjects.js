import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MyProjectCard from "../../components/myprojects/MyProjectCard";
import NewProjectForm from "../../components/sections/projects/NewProjectForm";

import { useAuth } from "../../providers/authentication";
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
