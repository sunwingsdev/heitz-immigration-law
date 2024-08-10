import BookButton from "./BookButton";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-3 shadow-md px-2 py-10 bg-white">
      <img className="w-1/3" src={service?.image} alt="" />
      <div className="w-2/3 px-3 space-y-3">
        <h2 className="text-[30px] leading-[36px] font-bold">
          {service?.title}
        </h2>
        <p>{service?.text}</p>
        <BookButton blue={true} text={service?.button} />
      </div>
    </div>
  );
};

export default ServiceCard;
