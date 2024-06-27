import {
  FaBalanceScale,
  FaBook,
  FaComment,
  FaGift,
  FaPlusCircle,
  FaShieldAlt,
} from "react-icons/fa";
import ServiceTypeCard from "../../shared/ServiceTypeCard";

const ServiceType = () => {
  const services = [
    {
      id: 1,
      icon: FaBook,
      style: "text-[#204498]",
      title: "Review Your History",
      details:
        "Your immigration history may impact your ability to apply for future benefits. We will conduct a thorough review so that you stay clear of potential setbacks.",
    },
    {
      id: 2,
      icon: FaShieldAlt,
      style: "text-[#ec2028]",
      title: "Review Your History",
      details:
        "Your immigration history may impact your ability to apply for future benefits. We will conduct a thorough review so that you stay clear of potential setbacks.",
    },
    {
      id: 3,
      icon: FaPlusCircle,
      style: "text-[#204498]",
      title: "Review Your History",
      details:
        "Your immigration history may impact your ability to apply for future benefits. We will conduct a thorough review so that you stay clear of potential setbacks.",
    },
    {
      id: 4,
      icon: FaBalanceScale,
      style: "text-[#204498]",
      title: "Review Your History",
      details:
        "Your immigration history may impact your ability to apply for future benefits. We will conduct a thorough review so that you stay clear of potential setbacks.",
    },
    {
      id: 5,
      icon: FaComment,
      style: "text-[#c8c8c8]",
      title: "Review Your History",
      details:
        "Your immigration history may impact your ability to apply for future benefits. We will conduct a thorough review so that you stay clear of potential setbacks.",
    },
    {
      id: 6,
      icon: FaGift,
      style: "text-[#ec2028]",
      title: "Review Your History",
      details:
        "Your immigration history may impact your ability to apply for future benefits. We will conduct a thorough review so that you stay clear of potential setbacks.",
    },
  ];
  return (
    <div className="text-center container mx-auto space-y-6 my-12">
      <h1 className="text-[42px] font-bold">
        Here are some of the things we can do for you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services &&
          services.map((service) => (
            <ServiceTypeCard key={service?.id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default ServiceType;
