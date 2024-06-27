import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full z-50 shadow-md py-4 ${
        isSticky ? "sticky top-0 bg-white" : "absolute top-0 bg-transparent"
      }`}
    >
      {/* Changed to sticky */}
      <div className="flex flex-row justify-between items-center container mx-auto">
        <img
          className="w-[200px]"
          src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/black.png"
          alt=""
        />
        <ul className="lg:hidden flex flex-row items-center justify-center gap-3 text-[#999]">
          <li>Menu</li>
          <li className={`text-white text-xl ${isSticky && "text-[#999]"}`}>
            <HiOutlineMenuAlt2 />
          </li>
        </ul>
        <ul className="hidden lg:flex flex-row gap-6 text-[#999]">
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/"
            exact
          >
            <li className={`${!isSticky ? 'hover:text-white': 'hover:text-[#204498]'}`}>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/services"
          >
            <li className={`${!isSticky ? 'hover:text-white': 'hover:text-[#204498]'}`}>Services</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/about"
          >
            <li  className={`${!isSticky ? 'hover:text-white': 'hover:text-[#204498]'}`}>About</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/testimonials"
          >
            <li  className={`${!isSticky ? 'hover:text-white': 'hover:text-[#204498]'}`}>Testimonials</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/video-faq"
          >
            <li  className={`${!isSticky ? 'hover:text-white': 'hover:text-[#204498]'}`}>Video FAQ</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/podcast"
          >
            <li  className={`${!isSticky ? 'hover:text-white': 'hover:text-[#204498]'}`}>Podcast</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-[#204498]"} ${
                isActive && !isSticky && "text-white"
              }`
            }
            to="/blog"
          >
            <li  className={`${!isSticky ? 'hover:text-white': 'hover:text-[#204498]'}`}>Blog</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
