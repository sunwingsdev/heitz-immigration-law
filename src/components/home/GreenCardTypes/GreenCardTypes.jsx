import ExperienceButton from "../../shared/ExperienceButton";
import { FiUsers } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";

const GreenCardTypes = () => {
  const services = [
    {
      id: 1,
      icon: FiUsers,
      button: "More about Family based Green Cards",
      title: "Family",
      details:
        "Do you have family in the United States? Can you get your green card while in the U.S. or do you have to apply through the consulate in your home country? How long will you have to wait? The intricacies of family visas can be complex. We take you through the entire process from beginning to end.",
    },
    {
      id: 2,
      icon: MdLibraryBooks,
      button: "More about Employment based Green Cards",
      title: "Employment",
      details:
        "In order to get a U.S. work visa that leads to a green card you must have a U.S. employer sponsor you. Your employer must prove there are no qualified American workers for the job. If you have an extraordinary ability you may be able to sponsor yourself.",
    },
    {
      id: 3,
      icon: IoStatsChartSharp,
      button: "More about Investment based Green Cards",
      title: "Investment",
      details:
        "Can you really “buy” a green card? The answer is yes. But there are other visas that can lead to a green card without investing a million dollars on a business. Find out how we can help you make the right decision to maximize your profits and your personal goals.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 container mx-auto">
        {services &&
          services.map(({ id, icon: Icon, title, details, button }) => (
            <div
              key={id}
              className="p-8 flex flex-col items-start bg-white justify-center gap-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 ease-linear"
            >
              <Icon className={`text-5xl mb-3 text-[#204498]`} />
              <h2 className="text-[28px] leading-[35px] text-black font-semibold">
                {title}
              </h2>
              <p className="font-semibold">Green Card</p>
              <p className="text-[17px] leading-[25px] tracking-wide text-[#676767] text-justify">
                {details}
              </p>
              <ExperienceButton text={button} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GreenCardTypes;
