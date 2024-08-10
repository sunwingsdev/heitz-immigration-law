import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/home/footer/Footer";
import NavContact from "../components/home/NavContact/NavContact";
import Navbar from "../components/shared/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
  // ScrollToTop function with smooth scrolling
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      if (pathname !== "/booking") {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Enables smooth scrolling
        });
      }
    }, [pathname]);

    return null;
  };

  return (
    <div>
      <NavContact />
      <div className="relative">
        <Navbar />
        <ScrollToTop /> {/* Ensure ScrollToTop is called here */}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
