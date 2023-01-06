import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import axios from "axios";
import urls from "../common/urls";
import { toast } from "react-toastify";

function ProductCTA() {
  const [email, setEmail] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "warning.main",
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" sx={{ maxWidth: 400, direction: "rtl" }}>
              <Typography variant="h3" component="h2" gutterBottom>
                {
                  "برای اطلاع از آخرین پروژه‌هاودسترسی به پروژه‌های آینده به خبرنامه ما بپیوندید."
                }
              </Typography>
              <Typography variant="h5"></Typography>
              <TextField
                noBorder
                placeholder="ایمیل خود را وارد کنید..."
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => joinWaitlist(email)}
              >
                <Typography variant="h5">{"مرا به‌روز کن"}</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background: require("./../assets/images/productCTAImageDots.png"),
            }}
          />
          <Box
            component="img"
            src={require("./../assets/images/cryptocurrency-blog-1.webp")}
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

function joinWaitlist(email) {
  axios
    .post(
      urls.common.joinWaitlist(),
      {
        Email: email,
      },
      { withCredentials: false }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success(" شما به خبرنامه اضافه شدید.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    });
}
export default ProductCTA;
