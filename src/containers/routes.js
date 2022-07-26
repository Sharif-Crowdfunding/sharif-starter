// Layout Types
import { DefaultLayout, UserLayout } from "../layouts";

// Route Views
import LoginForm from "../components/profile/Forms/LoginForm";
import ProfilePanel from "../components/profile/Panel/Panel";
import AboutUs from "./about";
import Authenticate from "./authenticate";
import Dashboard from "./dashboard/dashboard.js";
import Home from "./home.js";

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
    path: "/profile",
    layout: UserLayout,
    component: ProfilePanel,
  },
  {
    path: "/dashboard",
    layout: UserLayout,
    component: Dashboard,
  },
  {
    path: "/dashboard/:section",
    layout: UserLayout,
    component: Dashboard,
  },
  {
    path: "/auth/:section",
    layout: DefaultLayout,
    component: Authenticate,
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: LoginForm,
  },
  {
    path: "*",
    layout: DefaultLayout,
    component: Home,
  },
];
export default routes;
