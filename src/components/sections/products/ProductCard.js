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
import urls from "../../../common/urls";
import {
  NoPhotographyRounded,
  NotAccessible,
  NotInterested,
  PhotoCamera,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { height } from "@mui/system";

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
        {project.ProjectImage ? (
          <ProductImgStyle
            alt={project.Name}
            src={urls.common.image(project.ProjectImage)}
          />
        ) : (
          <NotInterested
            sx={{
              width: "70%",
              height: "70%",
              objectFit: "cover",
              position: "absolute",
              top: "10%",
              right: "15%",
            }}
          />
        )}
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
