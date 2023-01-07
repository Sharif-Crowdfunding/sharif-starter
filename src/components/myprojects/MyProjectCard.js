import { UploadRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import axios from "axios";
import { DropzoneDialog } from "material-ui-dropzone";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { getStatusMessage } from "../../utils/status";
import { useFetch } from "../../utils/useFetch";
import CrowdFundModal from "../modals/crowdfund";

export default function MyProjectCard({ project }) {
  const navigate = useNavigate();

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
            {project.name}
          </Typography>
          {project && (
            <>
              <Typography variant="body1" color="textSecondary" component="p">
                نماد توکن: {project.token_info.symbol}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                تعداد توکن: {project.token_info.total_supply}{" "}
              </Typography>
            </>
          )}
          <Typography variant="body2" color="textSecondary" component="p">
            تاریخ ایجاد:
          </Typography>
          <Chip
            label={getStatusMessage(project.token_info.development_stage)}
            sx={{
              position: "absolute",
              left: "1rem",
              padding: 2,
            }}
          />
        </CardContent>
        <CardActions disableSpacing>
          {getActionByStatus(project, navigate)}
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
function getActionByStatus(project, navigate) {
  function action(url) {
    axios.get(url)
      .then((res) => {
        window.location.reload(true);
        return res.data;
      })
      .catch((err) => console.log(err));
  }
  switch (project.token_info.development_stage) {
    case 0:
      return (
        <>
          <Button onClick={() => action(urls.project.fund(project.id))}>
            نهایی کردن پروژه
          </Button>
          <Button
            color="secondary"
            onClick={() => action(urls.project.cancel(project.id))}
          >
            لغو
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <Button onClick={() => action(urls.project.release(project.id))}>
            انتشار پروژه
          </Button>
          <CrowdFundModal />
          <Button
            color="secondary"
            onClick={() => action(urls.project.cancel(project.id))}
          >
            لغو
          </Button>{" "}
        </>
      );
    case 2:
      return (
        <>
          <Button onClick={() => action(urls.project.release(project.id))}>
            انتشار پروژه
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
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}
