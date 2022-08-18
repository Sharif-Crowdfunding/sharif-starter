import PropTypes from "prop-types";
// material
import { Grid } from "@mui/material";
import ProjectCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductList = ({ projects, ...other }) => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={3} {...other}>
      {projects &&
        projects.map((product) => (
          <Grid key={product.ID} item xs={16} sm={8} md={4}>
            <ProjectCard
              project={product}
              onClick={() => navigate("/projects/" + product.ID)}
            />
          </Grid>
        ))}
    </Grid>
  );
};
export default ProductList;
