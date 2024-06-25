import {
  FaFacebookF,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import DACA from "../../../assets/1.png";

const Footer = () => {
  return (
    <div className="">
      {/* Footer Top  */}
      <div className="bg-[#3a6ee8] py-[50px]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-7 text-white px-6">
          {/* single top left */}
          <div className="bg-[#204498] hover:bg-[#002d99] transition-all duration-300 ease-in-out p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 w-[100%] lg:w-[50%]">
            <h2 className="text-[31px] leading-9 font-semibold mb-2 sm:text-[33px] xl:leading-[42px]">
              Book a Consultation
            </h2>
            <p className="mb-12 text-[16px] lg:text-[17px]">
              Find out how to qualify for immigration services by booking your
              consultation and taking our immigration assessment quiz. You will
              be one step closer to getting your immigration case approved!
            </p>
            <button className="flex items-center gap-5 bg-[#ec2028] hover:bg-[#ec2042] transition-all duration-300 ease-in-out text-white py-3 px-5 font-semibold">
              <p>BOOK CONSULTATION</p>
              <FaLongArrowAltRight />
            </button>
          </div>
          {/* single top right */}
          <div className="w-[100%] lg:w-[50%]">
            <h4 className="text-[18.9px] md:text-[21px] font-semibold mb-3">
              We Offer Flat Rates & Payment Plans
            </h4>
            <p className="text-[16px] mb-6 lg:mb-10 lg:text-[17px]">
              We understand how expensive it can be to apply for immigration
              benefits. Government filing fees have increased and can add up
              quickly. Legal fees added to this cost can make it unaffordable
              for many. That’s where we can help.{" "}
              <span className="font-bold">
                By offering you a flat rate fee for your entire immigration
                case, you will not have any extra costs or surprises.
              </span>
            </p>
            <p className="text-[16px] lg:text-[17px]">
              All you need to do is make a deposit payment for the legal fees
              and the rest can be paid in monthly installments. Filing fees will
              be needed when the case is ready to submit to the appropriate
              agency.{" "}
              <span className="font-bold">
                No hidden costs, no hourly billing, no nonsense!
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto flex justify-between gap-5 my-20">
        <div className="w-[35%]">
          <h4 className="text-[#204498] text-[21px] font-bold mb-2 lg:mb-5">
            Heitz Immigration Law
          </h4>
          <h5 className="text-[#1e1e1e] text-[16px] lg:text-[18px] font-semibold">
            Practice limited to Immigration and Nationality Law.
          </h5>
          <p className="text-[16px] lg:text-[18px] mb-1">
            Heitz Immigration Law is located in downtown Lake Worth Beach, FL.
          </p>
          <h5 className="text-[#1e1e1e] text-[16px] lg:text-[18px] font-semibold mb-3">
            We speak English & Spanish.
          </h5>
          <h4 className="text-[#1e1e1e] text-[17px] lg:text-[19px] font-semibold mb-2">
            561-290-0101
          </h4>
          <Link>
            <p className="text-[16px] lg:text-[18px]">
              32 South J Street, Lake Worth Beach, FL 33460
            </p>
          </Link>
        </div>
        <div className="w-[15%]">
          <h4 className="text-[#204498] text-[21px] font-bold mb-2">
            Site Links
          </h4>
          <div className="flex flex-col">
            <Link className="mb-3 hover:text-[#204498]">Contact us</Link>
            <Link className="mb-3 hover:text-[#204498]">Green Card</Link>
            <Link className="mb-3 hover:text-[#204498]">Work USA</Link>
            <Link className="mb-3 hover:text-[#204498]">Invest USA</Link>
            <Link className="mb-3 hover:text-[#204498]">Testimonials</Link>
            <Link className="mb-3 hover:text-[#204498]">Podcast</Link>
            <Link className="mb-3 hover:text-[#204498]">About</Link>
            <Link className="mb-3 hover:text-[#204498]">Video FAQ</Link>
          </div>
        </div>
        <div className="w-[20%]">
          <h4 className="text-[#204498] text-[21px] font-bold mb-2">
            Latest Articles
          </h4>
          <Link className="flex gap-2 text-[#353535] hover:text-[#abb8c3]">
            <img src={DACA} alt="" />
            <p className="text-base">
              Navigating DACA Renewal: Understanding Criminal Barriers,
              Historical Insights, and Today’s Challenges
            </p>
          </Link>
        </div>
        <div className="w-[30%]">
          <h4 className="text-[#204498] text-[21px] font-bold mb-2">
            Legal Disclaimer
          </h4>
          <p className="text-[16px] lg:text-[18px]">
            This website contains general information not to be considered as
            legal advice. If you have specific questions about any immigration
            matter, please contact us to book a consultation.
          </p>
        </div>
      </div>
      {/* Footer Copy Right */}
      <div className="bg-[#f9f9f9] py-[20px]">
        <div className="container mx-auto flex flex-col sm:flex-row justify-start sm:justify-between gap-5">
          <p className="text-[#232323] text-[15px]">
            © 2024 Heitz Immigration Law.
          </p>
          <div className="flex gap-6">
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <IoIosCall />
            </Link>
            <Link>
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
