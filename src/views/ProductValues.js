import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#f9f9f9" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="https://github.com/mui/material-ui/blob/master/docs/public/static/themes/onepirate/productCurvyLines.png?raw=true"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://nobitex.ir/_nuxt/img/why1.fe46a70.webp"
                alt="suitcase"
                sx={{ height: 170 }}
              />
              <Typography variant="h4" sx={{ my: 5 }}>
                ساده و قابل دسترس
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://nobitex.ir/_nuxt/img/why2.76a5171.webp"
                alt="graph"
                sx={{ height: 170 }}
              />
              <Typography variant="h4" sx={{ my: 5 }}>
                سرمایه گذاری در پروژه های آینده
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://nobitex.ir/_nuxt/img/why3.1ed2508.webp"
                alt="clock"
                sx={{ height: 170 }}
              />
              <Typography variant="h4" sx={{ my: 5 }}>
                کارمزد پایین
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
