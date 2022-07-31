import { styled } from "@mui/material/styles";
import * as React from "react";
import Button from "../components/Button";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const backgroundImage =
  "https://static.wixstatic.com/media/be4f79_2145882a61cc43dc9e0f2d0cc588f6d2~mv2.png/v1/crop/x_1506,y_444,w_1881,h_1725/fill/w_1536,h_1406,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/1.png";
const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

export default function ProductHero() {
  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          width="35%"
          sx={{
            position: "absolute",
            top: "20%",
            right: "10%",
            direction: "rtl",
          }}
        >
          <Typography variant="h1" color="black">
            {"دسترسی آسان به پروژه های به‌روز ایران"}
          </Typography>
          <br />
          <br />
          <br />
          <div dir="ltr" style={{ marginLeft: "15%" }}>
            <Button
              color="primary"
              variant="contained"
              sx={{ minWidth: 200, borderRadius: 2 }}
            >
              <Typography variant='h4'>{"ثبت پروژه"}</Typography>
            </Button>{" "}
            <Button
              color="warning"
              variant="contained"
              sx={{ minWidth: 200, borderRadius: 2 }}
            >
              <Typography  variant='h4'> {"پروژه های آینده"}</Typography>
            </Button>
          </div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "#e3dede",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Box
          component="img"
          src={backgroundImage}
          width="35%"
          alt="hero "
          sx={{ position: "absolute", bottom: 50, left: "10%" }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
}
