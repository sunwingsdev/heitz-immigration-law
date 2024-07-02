import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import { RiLogoutCircleLine } from "react-icons/ri";

const Aside = () => {
  const { logOut } = useContext(AuthContext);
  const { addToast } = useToasts();
  const handleLogout = () => {
    logOut()
      .then(() => {
        addToast("Successfully Logged Out!", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((error) => {
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };
  return (
    <div className="bg-[#333] pt-4 pb-8 h-screen">
      <div className="px-5 pb-11">
        <Link to="/">
          <img
            className="w-48"
            src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/white.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1 text-white text-base font-medium">
        <Link>
          <p className="flex items-center gap-2 py-2 pl-6 pr-3 rounded bg-slate-600 hover:bg-blue-800">
            <FaHome />
            Home
          </p>
        </Link>
        <Link to="/dashboard/booking">
          <p className="flex items-center gap-2 py-2 pl-6 pr-3 rounded hover:bg-slate-600">
            <TbBrandBooking />
            Bookings
          </p>
        </Link>

        <p
          onClick={handleLogout}
          className="flex items-center gap-2 py-2 pl-6 pr-3 rounded hover:bg-slate-600"
        >
          <RiLogoutCircleLine />
          Logout
        </p>
      </div>
    </div>
  );
};

export default Aside;
