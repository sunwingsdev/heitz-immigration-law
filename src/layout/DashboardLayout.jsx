import { Outlet } from "react-router-dom";
import Aside from "../components/dashboard/aside/Aside";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row">
      <div className="min-w-[20%]">
        <Aside />
      </div>
      <div className="min-w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
