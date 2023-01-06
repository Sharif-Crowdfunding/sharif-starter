import { Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import MyProjectCard from "../../components/myprojects/MyProjectCard";

import { useFetch } from "../../utils/useFetch";
const MyProjects = () => {
  const [projects,setProjects]=useState(null)
  const navigate = useNavigate();
  const { data, error, loading } = useFetch(
    urls.project.getUserProjects(),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (data && data.length > 0) {
      // setProjects(data);
    }
  }, [error, data]);
  return (
    <>
      <Container>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Typography variant="h3">پروژه های من</Typography>
          <br />
          {projects && projects.map((p)=><MyProjectCard project={p} />)}
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
