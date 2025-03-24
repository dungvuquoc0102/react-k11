import Home from "@/pages/Home";
import config from "@/config";
import User from "@/pages/User";
import NotFound from "@/pages/NotFound";
import AdminLayout from "@/layouts/AdminLayout";

const routes = [
  {
    path: config.routes.home,
    element: Home,
  },
  {
    path: config.routes.users,
    element: User,
    layout: AdminLayout,
  },
  {
    path: config.routes.notFound,
    element: NotFound,
    layout: null,
  },
];

export default routes;
