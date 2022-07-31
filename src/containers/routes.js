// Layout Types
import { DefaultLayout } from "../layouts";

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
  },
  {
    path: "*",
    layout: DefaultLayout,
    component: Home,
  },
];
export default routes;
