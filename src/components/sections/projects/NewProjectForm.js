import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import urls from "../../../common/urls";
import SharifStarterContractInstance from "../../../contracts/sharifstarterInstance";
import { startProject } from "../../../contracts/utils";

export default function NewProjectForm() {
  const classes = {
    field: {
      marginTop: 2,
      marginBottom: 2,
      display: "block",
      textAlign: "right",
    },
  };
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [githubId, setGithubId] = useState("");
  const [tokenInfo, setTokenInfo] = useState("");
  const [website, setWebsite] = useState("");
  const [whitepapar, setWhitepaper] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [stage, setStage] = useState("requirment");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
  };
  return (
    <Container size="sm" sx={{ width: "80%" }}>
      <Typography variant="h3" color="textPrimary" component="h2" gutterBottom>
        ثبت پروژه جدید{" "}
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={classes.field}
          onChange={(e) => setName(e.target.value)}
          label="نام پروژه"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setWebsite(e.target.value)}
          label="وبسایت"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setWhitepaper(e.target.value)}
          label="آدرس Whitepapar"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setTelegramId(e.target.value)}
          label="آیدی تلگرام"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setTokenInfo(e.target.value)}
          label="اطلاعات توکن"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="جزيیات"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setGithubId(e.target.value)}
          label="آیدی Github"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}
        <FormControl sx={classes.field}>
          <FormLabel>وضعیت فعلی پروژه</FormLabel>
          <RadioGroup value={stage} onChange={(e) => setStage(e.target.value)}>
            <FormControlLabel
              label="بررسی نیازمندی‌ها"
              control={<Radio />}
              value="requirment"
            />
            <FormControlLabel
              label="اجرای نسخه ابتدایی"
              control={<Radio />}
              value="prototype"
            />
            <FormControlLabel
              label="آماده انتشار"
              control={<Radio />}
              value="production"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          startIcon={<KeyboardArrowRight />}
          onClick={() =>
            createProject({
              name: name,
              website: website,
              whitepapar: whitepapar,
              telegramId: telegramId,
              githubId: githubId,
              tokenInfo: tokenInfo,
              details: details,
            },navigate)
          }
        >
          <Typography variant="h4">ثبت اطلاعات</Typography>
        </Button>
      </form>
    </Container>
  );
}

function createProject(data, navigate) {
  axios
    .post(urls.project.create(), data)
    .then((res) => {
      console.log(res);
      navigate("/dashboard/projects");
    })
    .catch((err) => console.log(err));
}

