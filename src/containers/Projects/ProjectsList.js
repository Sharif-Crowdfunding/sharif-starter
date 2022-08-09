import { Container, Stack, Typography } from "@mui/material";
import React from "react";
// components
import { ProductList, ProjectsSort } from "../../components/sections/products";

export default function ProjectsList({ projects }) {
  const PROJECTS = projects;

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

      <ProductList products={PROJECTS} />
    </Container>
  );
}
