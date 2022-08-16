import { styled } from "@mui/material/styles";
import * as React from "react";
import Button from "../components/Button";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://humbyl.io/images/hbl.png";
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
  const navigate=useNavigate()
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
              onClick={()=>{
                navigate('auth/login')
              }}
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
          sx={{ position: "absolute", bottom: 150, left: "10%" }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
}
