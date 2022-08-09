// Layout Types
import { DefaultLayout } from "../layouts";
import DashboardLayout from "../layouts/dashboard";

// Route Views
import AboutUs from "./About";
import Authenticate from "./Auth";
import Dashboard from "./Dashboard";
import Home from "./Home.js";
import Projects from "./Projects";

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
    path: "/dashboard",
    layout: DashboardLayout,
    component: Dashboard,
  },
  {
    path: "/dashboard/:section",
    layout: DashboardLayout,
    component: Dashboard,
  },
  {
    path: "/projects",
    layout: DefaultLayout,
    component: Projects,
  },
  {
    path: "/projects/:id",
    layout: DefaultLayout,
    component: Projects,
  },
  {
    path: "*",
    layout: DefaultLayout,
    component: Home,
  },
];
// export default function Router() {
//   return useRoutes([
//     {
//       path: '/dashboard',
//       element: <DashboardLayout />,
//       children: [
//         { path: 'app', element: <DashboardApp /> },
//         { path: 'user', element: <User /> },
//         { path: 'products', element: <Products /> },
//         { path: 'blog', element: <Blog /> },
//       ],
//     },
//     {
//       path: '/',
//       element: <LogoOnlyLayout />,
//       children: [
//         { path: '/', element: <Navigate to="/dashboard/app" /> },
//         { path: 'login', element: <Login /> },
//         { path: 'register', element: <Register /> },
//         { path: '404', element: <NotFound /> },
//         { path: '*', element: <Navigate to="/404" /> },
//       ],
//     },
//     { path: '*', element: <Navigate to="/404" replace /> },
//   ]);
// }
export default routes;
