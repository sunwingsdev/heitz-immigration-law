import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

const ScheduleAnImmigration = () => {
  return (
    <div className="py-16">
      <h2 className="text-4xl text-center font-semibold">
        Schedule an Immigration Consultation
      </h2>
      <h4 className="text-2xl text-center font-semibold mt-3">
        with Attorney, Nadine Heitz.
      </h4>
      <div className="flex lg:flex-row flex-col gap-3 mt-12">
        <div className="bg-[#f9f9f9] py-10 px-8">
          <h4 className="text-xl font-semibold">Quick Response</h4>
          <p className="text-base py-6">
            When you submit the Contact Us form below, our dedicated team will
            reach out to you so that we can assist you with booking your
            consultation.
          </p>
          <button className="flex items-center gap-7 bg-blue-800 text-white py-3 px-5 rounded font-semibold hover:scale-105 text-sm lg:text-base">
            SEND US A MESSAGE <TiMessages />
          </button>
        </div>
        <div className="bg-[#f7f7f7] py-10 px-8">
          <Link>
            <h4 className="text-xl font-semibold text-blue-800 hover:text-black">
              Self-Schedule Your Appointment
            </h4>
          </Link>
          <p className="text-base py-6">
            We offer a convenient calendar booking option below. Select a date
            and time that suits your availability. With this feature, you can
            secure your consultation at your convenience.
          </p>
          <button className="flex items-center gap-3 sm:gap-7 bg-blue-800 text-white py-3 px-4 sm:px-5 rounded font-semibold hover:scale-105 text-xs sm:text-sm lg:text-base">
            BOOK AN APPOINTMENT NOW <SlCalender />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAnImmigration;
