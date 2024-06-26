import { FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoIosCall, IoMdMail } from "react-icons/io";

const NavContact = () => {
  return (
    <div className="container mx-auto flex flex-row justify-between items-center my-3 bg-white text-[#515151]">
      <div className="hidden lg:flex flex-row items-center gap-[20px]">
        <FaTwitter className="hover:text-[#204498]" />
        <FaFacebookF className="hover:text-[#204498]" />
        <FaLinkedinIn className="hover:text-[#204498]" />
        <IoIosCall className="hover:text-[#204498]" />
        <IoMdMail className="hover:text-[#204498]" />
      </div>
      <p className="hidden lg:block hover:text-[#204498]">Call 561-290-0101</p>
      <button className="bg-[#b90a18] hover:bg-[#f10e21] lg:bg-[#204498] lg:hover:bg-[#3555ff] mx-auto lg:m-0 px-3 text-white rounded-[4px] opacity-90 uppercase">
        Call 561-290-0101
      </button>
    </div>
  );
};

export default NavContact;
