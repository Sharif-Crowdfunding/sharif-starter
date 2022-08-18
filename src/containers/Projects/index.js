import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import Page from "../../components/Page";
import { useFetch } from "../../hooks/useFetch";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const navigate = useNavigate();
  const params = useParams();


  return (
    <Page title="Projects">
      <ProjectsList  />
    </Page>
  );
}
