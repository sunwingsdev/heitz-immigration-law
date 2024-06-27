import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import About from "../pages/home/about/About";
import Booking from "../pages/home/booking/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },
]);

export default router;
