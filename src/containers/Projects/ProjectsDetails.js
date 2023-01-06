import styled from "@emotion/styled";
import { NotInterested } from "@mui/icons-material";
import {
  Button,
  Card,
  Container,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import Label from "../../components/Label";
import { useFetch } from "../../hooks/useFetch";
import { useWallet } from "../../providers/wallet";
import { getStatusMessage } from "../../utils/status";
const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
const ProjectDetails = ({ id }) => {
  const [wallet] = useWallet();
  const [project, setProject] = useState();
  const { data, error, loading } = useFetch(
    urls.sale.getProjectById(),
    "POST",
    { ID: parseInt(id) },
    false
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.response.data.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (data) {
      setProject(data);
    }
  }, [error, data]);
  return (
    <Container dir="rtl" sx={{ paddingTop: "2%" }}>
      <Typography variant="h2" sx={{ mb: 5 }}>
        {project && project.Name}{" "}
      </Typography>
      <Card xs={16} sm={8} md={4} sx={{ width: "40%" }} elevation={false}>
        <Box sx={{ pt: "100%", position: "relative" }}>
          {project && (
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
          {project && project.ProjectImage ? (
            <ProductImgStyle
              alt={project && project.Name}
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">
              &nbsp;
              {project && project.Website}
            </Typography>
          </Stack>
        </Stack>
      </Card>
      {project && (
        <TokenPurchase id={project.ID} wallet={wallet} project={project} />
      )}
    </Container>
  );
};

const TokenPurchase = ({ id, wallet, project }) => {
  const [projectToken, setProjectToken] = useState(null);
  const [buyToken, setBuyToken] = useState(0);

  const { data, error, loading } = useFetch(
    urls.sale.getProjectToken(),
    "POST",
    {
      ProjectId: id,
    },
    false
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (data) {
      setProjectToken(data);
    }
  }, [error, data]);
  return (
    <Card
      xs={16}
      sm={8}
      md={4}
      sx={{ width: "40%", position: "absolute", left: "10%", top: "40%" }}
      elevation={false}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">
            &nbsp;
            {"خرید توکن"}
          </Typography>
        </Stack>
        <Stack sx={{ mt: 2, pr: "10%", pl: "10%" }}>
          {" "}
          <TextField
            value={buyToken}
            onChange={(e) => setBuyToken(e.target.value)}
            label="میزان توکن درخواستی"
            dir="rtl"
          />
          <Paper
            elevation={3}
            sx={{
              marginY: "5%",
              backgroundColor: "secondary.light",
              padding: "5%",
            }}
          >
            <FormLabel>
              حداکثر میزان توکن قابل خرید:{" "}
              {projectToken && projectToken.MaximumTokenSale}
            </FormLabel>
            <br />
            <FormLabel>
              {" "}
              میزان توکن موجود: {projectToken && projectToken.TokenNumber}
            </FormLabel>
            <br />
            <FormLabel>
              {" "}
              قیمت هر توکن (بر حسب Wei):{" "}
              {projectToken && projectToken.PricePerTokenByGwei}
            </FormLabel>
          </Paper>
          <div style={{ paddingRight: "5%", paddingBottom: "2%" }}>
            <FormLabel
              sx={{
                fontWeight: 800,
              }}
            >
              میزان پرداختی (بر حسب Wei):
              {projectToken && buyToken * projectToken.PricePerTokenByGwei}
            </FormLabel>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              // participate(
              //   project.ProjectContractAddress,
              //   wallet.address,
              //   buyToken,
              //   projectToken.PricePerTokenByGwei,
              //   projectToken.ID
              // );
            }}
          >
            <Typography variant="h5">خرید توکن</Typography>
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProjectDetails;
