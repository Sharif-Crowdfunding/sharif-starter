import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { fCurrency } from "../../../utils/formatNumber";
// components
import Label from "../../../components/Label";
import { getStatusMessage } from "../../../utils/status";

// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default function ProjectCard({ project, onClick }) {
  console.log(project);
  return (
    <Card onClick={onClick}>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {project.Status && (
          <Label
            variant="filled"
            color={(project.Status === 4 && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {getStatusMessage(project.Status)}
          </Label>
        )}
        <ProductImgStyle
          alt={project.Name}
          src={
            "https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2F78ipbw1c1za4oe1nqi8bgixq3x8u&w=1920&q=95"
          }
        />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {project.Name}
          </Typography>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">
            &nbsp;
            {project.Website}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
