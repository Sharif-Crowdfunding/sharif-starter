import { UploadRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip, Typography
} from "@mui/material";
import axios from "axios";
import { DropzoneDialog } from "material-ui-dropzone";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { connectWalletHandler } from "../../utils/connectWallet";
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
      ProjectId: project.ID,
    }
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
      sx={{
        width: "80%",
        margin: 2,
        display: "flex",
      }}
    >
      <ProjectImage src={project.ProjectImage} projectId={project.ID} />

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
                Wei
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
          {projectToken && getActionByStatus(projectToken, project, navigate)}
          {/* <IconButton aria-label="Accepted">
          <Done />
        </IconButton> */}
        </CardActions>
      </Box>
    </Card>
  );
}

const ProjectImage = ({ src, projectId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropzoneDialog
        acceptedFiles={["image/*"]}
        cancelButtonText={"لغو"}
        dialogTitle={"ارسال عکس پروژه"}
        submitButtonText={"ثبت"}
        maxFileSize={5000000}
        dropzoneText={"عکس خود را اینجا بارگذاری کنید"}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          uploadImage(files, projectId);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
      {src ? (
        <CardMedia
          onClick={() => setOpen(true)}
          image={urls.common.image(src)}
          component="img"
          sx={{ width: "20%", borderRadius: 2, padding: 1 }}
          alt="آپلود فایل"
        />
      ) : (
        <Button
          sx={{ width: "20%", alignSelf: "center" }}
          onClick={() => setOpen(true)}
        >
          <UploadRounded sx={{ height: "200px" }} />
        </Button>
      )}
    </>
  );
};
function getActionByStatus(projectToken, project, navigate) {
  function action(url) {
    axios
      .post(url, {
        ID: project.ID,
      })
      .then((res) => {
        window.location.reload(true);
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  switch (project.Status) {
    case 0:
      return (
        <>
          <Button onClick={() => navigate("/dashboard/projects/" + project.ID)}>
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
          {localStorage.getItem("account_address") ? (
            <Button
              onClick={() => releaseAndDeployContract(project, projectToken)}
            >
              نهایی کردن پروژه
            </Button>
          ) : (
            <Button onClick={() => connectWalletHandler()}>
              اتصال کیف پول
            </Button>
          )}
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

function releaseAndDeployContract(project, projectToken) {
  console.log(project);
  // startProject(
  //   project.Name,
  //   project.Details,
  //   projectToken.TokenName,
  //   100,
  //   projectToken.TokenNumber,
  //   projectToken.PricePerTokenByGwei,
  //   projectToken.MaximumTokenSale,
  //   localStorage.getItem("account_address"),
  //   project.ID
  // );
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
function uploadImage(files, id) {
  const file = files[0];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("projectId", id);
  axios
    .post(urls.project.upload(), formData, {
      "Contetnt-Type": "multipart/form-data",
    })
    .then((res) => {
      if(res.status===200){
        window.location.reload()
      }
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}
