import { FaArrowRight } from "react-icons/fa";

const BookButton = ({ blue, text }) => {
  return (
    <button
      className={`flex items-center gap-5 text-[13px] lg:text-base ${
        !blue
          ? "bg-[#ec2028] hover:bg-[#ec2042]"
          : "bg-[#204498] hover:bg-[#1248c7]"
      } transition-all duration-300 ease-in-out text-white py-3 px-5 font-semibold`}
    >
      <p>{text}</p>
      <FaArrowRight />
    </button>
  );
};

export default BookButton;
