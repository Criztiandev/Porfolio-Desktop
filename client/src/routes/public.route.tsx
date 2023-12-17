import LandingScreen from "@/views/static/LandingScreen";
import { createBrowserRouter } from "react-router-dom";

export const publicRoutes = createBrowserRouter([
  { path: "/", element: <LandingScreen /> },
]);
