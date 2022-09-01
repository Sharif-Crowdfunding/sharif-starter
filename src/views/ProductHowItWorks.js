import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import { Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 170,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "#f9f9f9", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          direction: "rtl",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="https://github.com/mui/material-ui/blob/master/docs/public/static/themes/onepirate/productCurvyLines.png?raw=true"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography
          variant="h3"
          marked="center"
          component="h2"
          sx={{ mb: 14, color: "warning.dark" }}
        >
          نحوه سرمایه گذاری
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://files.readme.io/7f5396b-web3modal_modal.png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  کیف‌پول دیجیتال خود را متصل کنید.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://files.readme.io/7f5396b-web3modal_modal.png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  کیف‌پول دیجیتال خود را متصل کنید.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://files.readme.io/7f5396b-web3modal_modal.png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  کیف‌پول دیجیتال خود را متصل کنید.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          key="wallet"
          onClick={() => {}}
          variant="contained"
          sx={{
            color: "warning.main",
            borderColor: "warning.main",
            mt: 5,
            borderRadius: 1,
          }}
        >
          <Typography variant="h5">اتصال کیف پول</Typography>
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
