import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import About from "../pages/home/about/About";
import Booking from "../pages/home/booking/Booking";
import TestimonialsPage from "../pages/home/TestimonialsPage/TestimonialsPage";
import Podcast from "../pages/home/podcast/Podcast";
import GreenCardServices from "../pages/home/GreenCardServices/GreenCardServices";
import BecomeUsaCitizen from "../pages/home/BecomeUsaCitizen/BecomeUsaCitizen";

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
        path: "/services/green-card",
        element: <GreenCardServices />,
      },
      {
        path: "/services/become-usa-citizen",
        element: <BecomeUsaCitizen />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "/podcast",
        element: <Podcast />,
      },
    ],
  },
]);

export default router;
