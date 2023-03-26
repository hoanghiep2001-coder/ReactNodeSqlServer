import Layout from "../components/layout";
import Register from "../components/layout/components/Register";
import Login from "../components/layout/components/Login";
// public routes
const publicRoutes = [
  { path: "/", component: Layout },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
