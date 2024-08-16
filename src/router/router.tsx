import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import ScaleVisualizer from "../pages/ScaleVisualizer/ScaleVisualizer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scale",
    element: <ScaleVisualizer />,
  },
]);

export default router;
