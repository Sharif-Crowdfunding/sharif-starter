import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "primary.main",
  color: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "primary.dark",
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{
        display: "flex",
        bgcolor: "primary.main",
        direction: "rtl",
        marginTop: 5,
      }}
    >
      <Container sx={{ my: 8, display: "flex", color: "white" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <GitHubIcon sx={iconStyle} />
                <TwitterIcon sx={iconStyle} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h4"
              marked="left"
              sx={{ color: "warning.main" }}
              gutterBottom
            >
              {"درباره شریف استارتر"}
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">
                  <Typography variant="h6" color="white">
                    {"قوانین و مقررات"}
                  </Typography>
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">
                  <Typography variant="h6" color="white">
                    {"درباره ما"}
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
