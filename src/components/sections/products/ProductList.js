import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ProjectCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={16} sm={8} md={4}>
          <ProjectCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
