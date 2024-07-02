import { FaCar } from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import ExperienceButton from "../../shared/ExperienceButton";

const CallAndLocation = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row  gap-4 py-16">
        <div className="bg-blue-800 p-8 sm:p-10 md:p-14 lg:p-16 w-full lg:w-1/2">
          <h4 className="text-2xl font-semibold flex gap-2 items-center text-white mb-4">
            <IoCall /> Give us a call
          </h4>
          <Link>
            <ExperienceButton white={true} text={"561-290-0101"} />
          </Link>
          <p className="text-base text-white mb-4">
            We speak <span className="font-semibold">English & Spanish</span>
          </p>
          <p className="text-base text-white">
            Reception team available <span className="font-semibold">24/7</span>
          </p>
        </div>
        <div className="p-8 sm:p-10 md:p-14 lg:p-16 border w-full lg:w-1/2">
          <div className="text-2xl font-semibold flex gap-3 text-black mb-3">
            <IoLocationSharp className="text-blue-800 text-3xl text-center" />
            <p>Come see us in Lake Worth Beach</p>
          </div>
          <Link>
            <ExperienceButton text={"32 South J Street, Lake Worth Beach"} />
          </Link>
          <p className="text-base text-black">
            Office Hours <span className="font-semibold">Monday</span> to{" "}
            <span className="font-semibold">Friday </span> 9:00am – 5:00pm
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        <div className="bg-[#f9f9f9] p-10 border w-full md:w-1/3">
          <IoLocationSharp className="text-blue-800" size={30} />
          <h2 className="py-4 text-3xl font-semibold">Parking</h2>
          <p className="text-base">
            <span className="font-semibold">
              We are located in downtown Lake Worth Beach,
            </span>{" "}
            at the corner of South J Street and 1st Ave. South, just one block
            East of Dixie.
          </p>
        </div>
        <div className="bg-[#f9f9f9] p-10 border w-full md:w-1/3">
          <FaCar className="text-blue-800" size={30} />
          <h2 className="py-4 text-3xl font-semibold">Office Hours</h2>
          <p className="text-base">
            Parking is available on J Street as well as a free Public Parking
            Lot off K Street. Click on{" "}
            <Link>
              <span className="text-[#204498]">“Public Parking”</span>
            </Link>{" "}
            for the exact locations of nearby parking lots.
          </p>
        </div>
        <div className="bg-[#f9f9f9] p-10 border w-full md:w-1/3">
          <SlCalender className="text-blue-800" size={30} />
          <h2 className="py-4 text-3xl font-semibold">Office Location</h2>
          <p className="text-base">
            We are open{" "}
            <span className="font-semibold">
              Monday to Friday, 9:00am – 5:00pm
            </span>{" "}
            Our reception team is available to take your calls 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallAndLocation;
