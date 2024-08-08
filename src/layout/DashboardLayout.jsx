import { Outlet } from "react-router-dom";
import Aside from "../components/dashboard/aside/Aside";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row">

        <Aside />
 
      <div className="min-w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
