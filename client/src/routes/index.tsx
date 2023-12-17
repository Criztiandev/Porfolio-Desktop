import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "./public.route";

const Router = () => {
  const routes = publicRoutes;
  return <RouterProvider router={routes} />;
};

export default Router;
