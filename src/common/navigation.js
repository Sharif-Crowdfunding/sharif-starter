import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "پروژه ها", href: "/projects" },
  { name: "درباره ما", href: "/aboutus" },
];

const MainNavigation = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" dir="rtl">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CurrencyBitcoinIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            fontSize="large"
          />
          <Typography
            variant="h3"
            component="a"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            شریف استارتر
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(false)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigate(page.href)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CurrencyBitcoinIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            fontSize="large"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            شریف استارتر
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              mr: 3,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ mr: 1, my: 2, color: "white", display: "block" }}
                onClick={() => navigate(page.href)}
              >
                <Typography variant="h5">{page.name}</Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              key="wallet"
              onClick={() => navigate('/auth/login')}
              variant="outlined"
              sx={{ color: "warning.main", borderColor: "warning.main" }}
            >
              <Typography variant="h5">ورود</Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavigation;