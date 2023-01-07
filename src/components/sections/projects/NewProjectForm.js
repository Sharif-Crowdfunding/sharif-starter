import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../../common/urls";

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
  const [tokenName, setTokenName] = useState("");
  const [tokenNumber, setTokenNumber] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [githubId, setGithubId] = useState("");
  const [website, setWebsite] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

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
        <Container>
          <Typography
            variant="h4"
            color="textPrimary"
            component="h3"
            gutterBottom
          >
            ثبت اطلاعات توکن پروژه{" "}
          </Typography>
          <TextField
            sx={classes.field}
            onChange={(e) => setTokenName(e.target.value)}
            label="نام توکن"
            variant="outlined"
            color="primary"
            fullWidth
            required
          />
          <TextField
            sx={classes.field}
            onChange={(e) => setTokenNumber(e.target.value)}
            label="تعداد توکن درخواستی"
            variant="outlined"
            color="primary"
            fullWidth
            required
          />
        </Container>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          startIcon={<KeyboardArrowRight />}
          onClick={() =>
            createProject(
              {
                name: name,
                image: "1.jpg",
                basic_info: {
                  website: website,
                  telegram_id: telegramId,
                  details: details,
                  github_id: githubId,
                },
                token_info: {
                  symbol: tokenName,
                  total_supply: tokenNumber,
                },
              },
              navigate
            )
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
      toast.success("ثبت پروژه با موفقیت انجام شد.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      // navigate("/dashboard/projects");
    })
    .catch((err) => console.log(err));
}
