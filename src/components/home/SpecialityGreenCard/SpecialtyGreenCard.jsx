import { FaRegAddressCard } from "react-icons/fa";
import ExperienceButton from "../../shared/ExperienceButton";

const SpecialtyGreenCard = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 my-6 md:h-[300px]">
      <div className="w-full md:w-2/3 h-full flex flex-col items-start justify-center gap-3 px-6 py-8 shadow hover:shadow-md hover:scale-105 duration-200 transition-all">
        <FaRegAddressCard className="text-5xl text-[#204498]" />
        <h2 className="text-3xl font-bold text-black">Specialty Green Card</h2>
        <p className="text-[17px] leading-[30px] text-black">
          There may be other ways to obtain a green card that involve unique
          circumstances. One way is by being approved for asylum. Another is by
          being a victim of a violent crime and yet another is through
          cancellation of your removal (deportation) case. Any of these are
          complex and require expert legal guidance.
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-[#204498] text-white h-full flex flex-col items-center justify-center gap-4 px-8">
        <h2 className="text-lg md:text-3xl font-bold">
          Not sure what you qualify for?
        </h2>
        <ExperienceButton
          text={"Book Your Immigration Consultation"}
          white={true}
        />
      </div>
    </div>
  );
};

export default SpecialtyGreenCard;
