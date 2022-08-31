import { Done } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { padding } from "@mui/system";
import axios from "axios";
import { DropzoneDialog } from "material-ui-dropzone";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { getStatusMessage } from "../../utils/status";
import { useFetch } from "../../utils/useFetch";

export default function MyProjectCard({ project }) {
  const [projectToken, setProjectToken] = useState(null);
  const navigate = useNavigate();
  // getProjectTokenInfo(project.ID, setProjectToken);
  const { data, error, loading } = useFetch(
    urls.project.getProjectToken(),
    "POST",
    {
      project_id: project.ID,
    }
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (data && data.length > 0) {
      setProjectToken((p) => data);
      console.log(data);
    }
  }, [error, data]);
  return (
    <Card
      sx={{
        width: "80%",
        margin: 2,
        display: "flex",
      }}
    >
      <ProjectImage />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ color: "info.main" }}
          >
            {project.Name}
          </Typography>
          {projectToken && (
            <>
              <Typography variant="body1" color="textSecondary" component="p">
                نام توکن: {projectToken.TokenName}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                مبلغ هدف:{" "}
                {parseInt(projectToken.TokenNumber) *
                  parseInt(projectToken.PricePerTokenByGwei)}{" "}
                Gwei
              </Typography>
            </>
          )}
          <Typography variant="body2" color="textSecondary" component="p">
            تاریخ ایجاد: {project.CreatedAt.slice(0, 10)}
          </Typography>
          <Chip
            label={getStatusMessage(project.Status)}
            sx={{
              position: "absolute",
              left: "1rem",
              padding: 2,
            }}
          />
        </CardContent>
        <CardActions disableSpacing>
          {getActionByStatus(project.Status, project.ID, navigate)}
          {/* <IconButton aria-label="Accepted">
          <Done />
        </IconButton> */}
        </CardActions>
      </Box>
    </Card>
  );
}

const ProjectImage = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropzoneDialog
        acceptedFiles={["image/*"]}
        cancelButtonText={"لغو"}
        dialogTitle = {"ارسال عکس پروژه"}
        submitButtonText={"ثبت"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          console.log("Files:", files);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
      <CardMedia
        onClick={() => setOpen(true)}
        image={
          "https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2F78ipbw1c1za4oe1nqi8bgixq3x8u&w=1920&q=95"
        }
        component="img"
        sx={{ width: 170, borderRadius: 2, padding: 1 }}
        alt="Live from space album cover"
      />
    </>
  );
};
function getActionByStatus(status, projectId, navigate) {
  function action(url) {
    axios
      .post(url, {
        id: projectId,
      })
      .then((res) => {
        window.location.reload(true);
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  switch (status) {
    case 0:
      return (
        <>
          <Button onClick={() => navigate("/dashboard/projects/" + projectId)}>
            ثبت اطلاعات تکمیلی
          </Button>
          <Button
            color="secondary"
            onClick={() => action(urls.project.cancel())}
          >
            لغو
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <Button onClick={() => action(urls.project.release())}>
            نهایی کردن پروژه
          </Button>
          <Button
            color="secondary"
            onClick={() => action(urls.project.cancel())}
          >
            لغو
          </Button>{" "}
        </>
      );
    case 2:
      return (
        <>
          <Button onClick={() => action(urls.project.finish())}>
            پایان جمع‌سپاری
          </Button>
        </>
      );
    case 3:
      return (
        <>
          <Button color="secondary">بررسی روند پیشرفت پروژه</Button>
        </>
      );
    default:
      break;
  }
}

const getProjectTokenInfo = (project_id, setToken) => {
  axios
    .post(urls.project.getProjectToken(), {
      project_id: project_id,
    })
    .then((res) => {
      setToken(res.data);
    })
    .catch((err) => console.log(err));
};
