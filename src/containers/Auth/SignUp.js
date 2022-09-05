import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import axios from "axios";
import * as React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainNavigation from "../../common/navigation";
import urls from "../../common/urls";
import FormButton from "../../form/FormButton";
import FormFeedback from "../../form/FormFeedback";
import RFTextField from "../../form/RFTextField";
import { email, required } from "../../form/validation";
import AppFooter from "../../views/AppFooter";
import AppForm from "../../views/AppForm";

function SignUp() {
  const [sent, setSent] = React.useState(false);
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = required(
      ["firstName", "lastName", "email", "password"],
      values
    );

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = (values) => {
    setSent(true);
    const registerPayload = {
      Email: values.email,
      Password: values.password,
      Name: values.firstName + " " + values.lastName,
    };
    axios
      .post(urls.auth.register(), registerPayload)
      .then((response) => {
        if (response.status === 200) {
          toast.success("ثبت کاربر با موفقیت انجام شد.", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          navigate("/auth/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            ساخت حساب کاربری
          </Typography>
          <Typography variant="body2" align="center">
            <Link onClick={() => navigate("/auth/login")} underline="always">
              ورود به حساب
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 6 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete="given-name"
                    fullWidth
                    label="نام"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete="family-name"
                    fullWidth
                    label="نام خانوادگی"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="ایمیل"
                margin="normal"
                name="email"
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="new-password"
                label="رمزعبور"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                color="warning"
                fullWidth
              >
                {submitting || sent ? "درحال بررسی..." : "ساخت حساب"}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default SignUp;
