import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import {
  Avatar, Box, Button,
  Drawer, Link, Stack, Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
// mock
// hooks
import useResponsive from "../../hooks/useResponsive";
// components
import NavSection from "../../components/NavSection";
import Scrollbar from "../../components/Scrollbar";
//
import navConfig from "./NavConfig";
import { useAuth } from "../../providers/authentication";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const [user]=useAuth()
  const account = {
    displayName: "عرفان فراوانی",
    email: "erfanfi79@gmail.com",
    photoURL: require('./../../assets/avatar.png'),
  };

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" , justifyContent:'center'}}>
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
          {"شریف استارتر"}
        </Typography>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="h6" sx={{ color: "text.primary",mr:2 }}>
              {user && user.Name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {account.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: "relative" }}
        >


          {/* <Button
            href="https://material-ui.com/store/items/minimal-dashboard/"
            target="_blank"
            variant="contained"
          >
            Upgrade to Pro
          </Button> */}
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          anchor="right"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRightColor: "background.default",
              borderRightStyle: "dashed",
            },
          }
        }

        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
