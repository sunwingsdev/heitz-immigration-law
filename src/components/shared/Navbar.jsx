import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState({
    services: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMenu = (menu) => {
    setMenuCollapsed((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div
      className={`w-full z-50 py-4 ${
        isSticky
          ? "sticky top-0 bg-white shadow-md"
          : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between items-center container mx-auto">
        <Link to="/">
          <img
            className="w-[200px]"
            src={
              isSticky
                ? "https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/color-2.png"
                : "https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/white.png"
            }
            alt="Logo"
          />
        </Link>
        <ul className="lg:hidden flex flex-row items-center justify-center gap-3 text-[#999]">
          <li>Menu</li>
          <li
            className={`text-white text-xl ${isSticky && "text-[#999]"}`}
            onClick={toggleMobileMenu}
          >
            <HiOutlineMenuAlt2 className="text-[#999]" />
          </li>
        </ul>
        <ul
          className={`hidden lg:flex flex-row gap-2 md:gap-4 ${
            isSticky ? "text-[#999]" : "text-[#d6d6d6]"
          } text-sm lg:text-base xl:text-lg`}
        >
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/"
            exact
          >
            <li
              className={`${
                !isSticky ? "hover:text-white" : "hover:text-[#204498]"
              }`}
            >
              Home
            </li>
          </NavLink>
          <li
            className={`group relative ${
              !isSticky ? "hover:text-white" : "hover:text-[#204498]"
            }`}
          >
            Services
            <ul className="hidden group-hover:block w-52 space-y-2 absolute top-6 bg-white text-[#999] p-3">
              <Link to="/services/green-card">
                <li className="hover:text-[#204498]">Green Card</li>
              </Link>
              <Link to={"/services/become-usa-citizen"}>
                <li className="hover:text-[#204498]">Become a USA citizen</li>
              </Link>
            </ul>
          </li>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/about"
          >
            <li
              className={`${
                !isSticky ? "hover:text-white" : "hover:text-[#204498]"
              }`}
            >
              About
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/testimonials"
          >
            <li
              className={`${
                !isSticky ? "hover:text-white" : "hover:text-[#204498]"
              }`}
            >
              Testimonials
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/video-faq"
          >
            <li
              className={`${
                !isSticky ? "hover:text-white" : "hover:text-[#204498]"
              }`}
            >
              Video FAQ
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/podcast"
          >
            <li
              className={`${
                !isSticky ? "hover:text-white" : "hover:text-[#204498]"
              }`}
            >
              Podcast
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/blog"
          >
            <li
              className={`${
                !isSticky ? "hover:text-white" : "hover:text-[#204498]"
              }`}
            >
              Blog
            </li>
          </NavLink>
          <Link to="/booking">
            <li
              className="hover:bg-[#b90a18] bg-[#f10e21]
            mx-auto lg:m-0 px-3 text-white rounded-[4px] opacity-90 uppercase"
            >
              Book consultation
            </li>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto`}
      >
        <div className="flex flex-col p-4 h-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Menu</h2>
            <IoClose className="text-2xl" onClick={toggleMobileMenu} />
          </div>
          <ul className="flex flex-col gap-3 mt-6 text-[#999]">
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-[#204498]"} ${
                  isActive && !isSticky && "text-[#204498]"
                }`
              }
              to="/"
              exact
              onClick={toggleMobileMenu}
            >
              <li
                className={`${
                  !isSticky ? "hover:text-[#204498]" : "hover:text-[#204498]"
                }`}
              >
                Home
              </li>
            </NavLink>
            <li
              className={`${
                !isSticky ? "hover:text-[#204498]" : "hover:text-[#204498]"
              }`}
              onClick={() => toggleMenu("services")}
            >
              Services
            </li>
            {!menuCollapsed.services && (
              <ul className="ml-4 space-y-3">
                <Link to="/services/green-card" onClick={toggleMobileMenu}>
                  <li className="hover:text-[#204498]">Green Card</li>
                </Link>
                <Link
                  to="/services/become-usa-citizen"
                  onClick={toggleMobileMenu}
                >
                  <li className="hover:text-[#204498]">Become a USA citizen</li>
                </Link>
              </ul>
            )}
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-[#204498]"} ${
                  isActive && !isSticky && "text-[#204498]"
                }`
              }
              to="/about"
              onClick={toggleMobileMenu}
            >
              <li
                className={`${
                  !isSticky ? "hover:text-[#204498]" : "hover:text-[#204498]"
                }`}
              >
                About
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-[#204498]"} ${
                  isActive && !isSticky && "text-[#204498]"
                }`
              }
              to="/testimonials"
              onClick={toggleMobileMenu}
            >
              <li
                className={`${
                  !isSticky ? "hover:text-[#204498]" : "hover:text-[#204498]"
                }`}
              >
                Testimonials
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-[#204498]"} ${
                  isActive && !isSticky && "text-[#204498]"
                }`
              }
              to="/video-faq"
              onClick={toggleMobileMenu}
            >
              <li
                className={`${
                  !isSticky ? "hover:text-[#204498]" : "hover:text-[#204498]"
                }`}
              >
                Video FAQ
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-[#204498]"} ${
                  isActive && !isSticky && "text-[#204498]"
                }`
              }
              to="/podcast"
              onClick={toggleMobileMenu}
            >
              <li
                className={`${
                  !isSticky ? "hover:text-[#204498]" : "hover:text-[#204498]"
                }`}
              >
                Podcast
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-[#204498]"} ${
                  isActive && !isSticky && "text-[#204498]"
                }`
              }
              to="/blog"
              onClick={toggleMobileMenu}
            >
              <li
                className={`${
                  !isSticky ? "hover:text-[#204498]" : "hover:text-[#204498]"
                }`}
              >
                Blog
              </li>
            </NavLink>
            <Link to="/booking">
              <li className="hover:bg-[#b90a18] bg-[#f10e21] lg:mx-auto lg:m-0 px-3 text-white rounded-[4px] opacity-90 uppercase">
                Book consultation
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
