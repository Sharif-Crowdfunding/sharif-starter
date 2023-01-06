import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import urls from "../../common/urls";
// components
import { ProductList, ProjectsSort } from "../../components/sections/products";
import { useFetch } from "../../hooks/useFetch";

export default function ProjectsList({}) {
  const [projects, setProjects] = useState(null);
  const projectData = [];
  const { data, error, loading } = useFetch(urls.sale.getProjects(), "GET");
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (data && data.length > 0) {
      console.log(data);
      setProjects(data);
    }
  }, [error, data]);

  return (
    <Container dir="rtl" sx={{ paddingTop: "2%" }}>
      <Typography variant="h2" sx={{ mb: 5 }}>
        پروژه‌های جمع سپاری
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap-reverse"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProjectsSort />
        </Stack>
      </Stack>
      {projects && (
        <>
          <Stack sx={{ mb: 5 }}>
            <ProductList projects={projects.filter((p) => p.Status === 2)} isClickable/>
          </Stack>
          <hr />
          <Stack sx={{ mb: 5, mt: 5 }}>
            <ProductList projects={projects.filter((p) => p.Status !== 2)} />
          </Stack>
        </>
      )}
    </Container>
  );
}
