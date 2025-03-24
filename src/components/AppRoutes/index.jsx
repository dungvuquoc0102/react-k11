import DefaultLayout from "@/layouts/DefaultLayout";
import NoLayout from "@/layouts/NoLayout";
import routes from "@/routes";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Layout =
          route.layout === void 0 ? DefaultLayout : route.layout || NoLayout;
        return (
          <Route key={index} path={route.path} element={<Layout />}>
            <Route path={route.path} element={<route.element />} />
          </Route>
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
