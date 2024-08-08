import { useContext, useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import { RiLogoutCircleLine } from "react-icons/ri";

const Aside = () => {
  const { logOut } = useContext(AuthContext);
  const { addToast } = useToasts();
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#333] pt-4 pb-8 h-screen lg:min-w-[20%] relative">
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="text-white bg-[#333] p-2 rounded-full shadow-lg focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Logo for Mobile */}
      {isOpen && (
        <div className="px-5 pb-4 lg:hidden">
          <Link to="/">
            <img
              className="w-48 mx-auto"
              src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/white.png"
              alt="Logo"
            />
          </Link>
        </div>
      )}
      {/* Logo for Desktop */}
      <div className="px-5 pb-11 hidden lg:block">
        <Link to="/">
          <img
            className="w-48"
            src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/white.png"
            alt="Logo"
          />
        </Link>
      </div>
      {/* Menu Items */}
      <div
        className={`lg:flex lg:flex-col gap-1 text-white text-base font-medium ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <NavLink exact to="/" activeClassName="bg-blue-800">
          <p
            onClick={toggleMenu}
            className="flex items-center gap-2 py-2 pl-6 pr-3 rounded hover:bg-slate-600"
          >
            <FaHome />
            Home
          </p>
        </NavLink>
        <NavLink to="/dashboard/booking" activeClassName="bg-blue-800">
          <p
            onClick={toggleMenu}
            className="flex items-center gap-2 py-2 pl-6 pr-3 rounded hover:bg-slate-600"
          >
            <TbBrandBooking />
            Bookings
          </p>
        </NavLink>
        <p
          onClick={() => {
            toggleMenu();
            handleLogout();
          }}
          className="flex items-center gap-2 py-2 pl-6 pr-3 rounded hover:bg-slate-600 cursor-pointer"
        >
          <RiLogoutCircleLine />
          Logout
        </p>
      </div>
    </div>
  );
};

export default Aside;
