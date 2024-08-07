import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import About from "../pages/home/about/About";
import Booking from "../pages/home/booking/Booking";
import TestimonialsPage from "../pages/home/TestimonialsPage/TestimonialsPage";
import Podcast from "../pages/home/podcast/Podcast";
import GreenCardServices from "../pages/home/GreenCardServices/GreenCardServices";
import BecomeUsaCitizen from "../pages/home/BecomeUsaCitizen/BecomeUsaCitizen";
import VideoFaq from "../pages/home/videoFaq/VideoFaq";
import Blog from "../pages/home/blog/Blog";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/dashboardHome/DashboardHome";
import DashboardBooking from "../pages/dashboard/dashboardBooking/DashboardBooking";
import Login from "../pages/Login&Registration/Login";
import Registration from "../pages/Login&Registration/Registration";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/video-faq",
        element: <VideoFaq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "booking",
        element: <DashboardBooking />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default router;
