// Layout Types
import { Dashboard } from "@mui/icons-material";
import { DefaultLayout } from "../layouts";
import DashboardLayout from "../layouts/dashboard";

// Route Views
import AboutUs from "./About";
import Authenticate from "./auth";
import Home from "./Home.js";

const routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home,
  },
  {
    path: "/aboutus",
    layout: DefaultLayout,
    component: AboutUs,
  },

  {
    path: "/auth/:section",
    layout: DefaultLayout,
    component: Authenticate,
  },  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: Dashboard,
  },
  {
    path: "*",
    layout: DefaultLayout,
    component: Home,
  },
];
export default routes;
