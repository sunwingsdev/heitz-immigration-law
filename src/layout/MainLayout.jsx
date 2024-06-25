import { Outlet } from "react-router-dom";
import Footer from "../components/home/footer/Footer";
import NavContact from "../components/home/NavContact/NavContact";

const MainLayout = () => {
  return (
    <div>
      <NavContact />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
