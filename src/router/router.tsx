import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
