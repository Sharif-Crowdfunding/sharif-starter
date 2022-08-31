import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import CompleteProjectForm from "../../components/sections/projects/CompleteProjectForm";
import { startProject } from "../../contracts/utils";
import { useFetch } from "../../utils/useFetch";

const CompleteProject = () => {
  const params = useParams();
  const [details, setDetails] = useState();

  const { data, error, loading } = useFetch(
    urls.sale.getProjectById(),
    "POST",
    { ID: parseInt(params.id) },
    false
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.response.data.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (data) {
      setDetails(data);
    }
  }, [error, data]);

  function completeProject(data, navigate) {
    axios
      .post(urls.project.addAdditionalTokenInfo(), data)
      .then((res) => {
        if (res.status === 200) {
         startProject(details.Name,details.Details,data.TokenName,10,data.TokenNumber,data.PricePerTokenByGwei,data.MaximumTokenSale);
        }
        console.log(res);
        navigate("/dashboard/projects");
      })
      .catch((err) => console.log(err));
  }

  if (!params.id) {
    return <Navigate to={"/dashboard/projects"} />;
  }
  return (
    <>
      <Container>
        <CompleteProjectForm projectId={params.id} onSubmit={completeProject} />
      </Container>
    </>
  );
};


export default CompleteProject;
