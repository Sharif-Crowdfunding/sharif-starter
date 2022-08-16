import * as React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button, Divider, Stack, Typography } from "@mui/material";
import MainNavigation from "../../common/navigation";
import FormButton from "../../form/FormButton";
import FormFeedback from "../../form/FormFeedback";
import RFTextField from "../../form/RFTextField";
import { email, required } from "../../form/validation";
import AppFooter from "../../views/AppFooter";
import AppForm from "../../views/AppForm";
import Iconify from "../../components/Iconify";
import axios from "axios";
import urls from "../../common/urls";
import { setAuthToken } from "../../providers/authentication";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [sent, setSent] = React.useState(false);
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = required(["email", "password"], values);

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
    const loginPayload = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(urls.auth.login(), loginPayload)
      .then((response) => {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setAuthToken(token);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            {"ورود به حساب کاربری"}
          </Typography>
          <Typography variant="body2" align="center">
            <Link
              onClick={() => navigate("/auth/register")}
              align="center"
              underline="always"
            >
              {"ساخت حساب کاربری جدید "}
            </Link>
          </Typography>
        </React.Fragment>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify
              icon="eva:google-fill"
              color="#DF3E30"
              width={22}
              height={22}
            />
          </Button>

          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify
              icon="eva:github-fill"
              color="#1877F2"
              width={22}
              height={22}
            />
          </Button>
        </Stack>

        <Divider sx={{ mt: 2 }}>
          {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {'یا'}
          </Typography> */}
        </Divider>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="ایمیل"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
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
                size="large"
                color="warning"
                fullWidth
              >
                {submitting || sent ? "درحال بررسی ..." : "ورود"}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/auth/forgot-password/">
            {"آیا رمزعبور را فراموش کرده‌اید؟"}
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default SignIn;
