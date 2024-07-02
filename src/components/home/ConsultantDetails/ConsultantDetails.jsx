import { FaRegClock } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";

const ConsultantDetails = () => {
  return (
    <div className="w-full md:w-1/2 text-[var(--text-color-level2,rgba(26,26,26,0.61))] space-y-3">
      <img
        className="w-32 rounded-full"
        src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/6054468/d9f9486b.jpg"
        alt=""
      />
      <p className="font-bold leading-[24px]">Nadine Heitz</p>
      <h2 className="text-[28px] leading-[32px] font-bold text-black">
        Immigration Consultation, Phone/Zoom/Office $100
      </h2>
      <p className="flex items-center gap-2 font-bold">
        <FaRegClock className="text-2xl" />
        30 min
      </p>
      <p className="flex items-center gap-2 font-bold">
        <IoCardOutline className="text-2xl" />
        $100 USD
      </p>
      <div className="text-black leading-6">
        Select your preference for your immigration consultation:{" "}
        <ul className="p-1 ">
          <li>1. Zoom online meeting, or</li>
          <li>
            2. Phone meeting. (For a phone consultation you need to have a U.S.
            or Canadian phone number)
          </li>
          <li>
            3. In-person office appointment at 32 S J St. Lake Worth Beach, FL
            33460
          </li>
        </ul>
        You will meet with the attorney, Nadine Heitz, to discuss your
        immigration history and goals. You will select your type of consultation
        and make your payment at the time of booking.
      </div>
    </div>
  );
};

export default ConsultantDetails;
