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
import React, { useState } from "react";

export default function NewProjectForm() {
  const classes = {
    field: {
      marginTop: 2,
      marginBottom: 2,
      display: "block",
      textAlign: "right",
    },
  };
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");

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
          onChange={(e) => setTitle(e.target.value)}
          label="نام پروژه"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="وبسایت"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="آدرس Whitepapar"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setTitle(e.target.value)}
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
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel label="بررسی نیازمندی‌ها" control={<Radio />} value="Money" />
            <FormControlLabel label="اجرای نسخه ابتدایی" control={<Radio />} value="Todos" />
            <FormControlLabel label="آماده انتشار" control={<Radio />} value="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          startIcon={<KeyboardArrowRight />}
        ><Typography variant="h4">
          ثبت اطلاعات
          </Typography></Button>
      </form>
    </Container>
  );
}
