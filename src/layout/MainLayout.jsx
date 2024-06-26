import { Outlet } from "react-router-dom";
import Footer from "../components/home/footer/Footer";
import NavContact from "../components/home/NavContact/NavContact";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <NavContact />
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
