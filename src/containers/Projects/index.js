import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import Page from "../../components/Page";
import { useFetch } from "../../hooks/useFetch";
import ProjectDetails from "./ProjectsDetails";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const navigate = useNavigate();
  const params = useParams();
  if (params.id) {
    return (
      <Page title="پروژه">
        <ProjectDetails id={params.id} />
      </Page>
    );
  }
  return (
    <Page title="پروژه ها">
      <ProjectsList />
    </Page>
  );
}
