import DesktopScreen from "@/views/static/DesktopScreen";
import { createBrowserRouter } from "react-router-dom";

export const publicRoutes = createBrowserRouter([
  { path: "/", element: <DesktopScreen /> },
]);
