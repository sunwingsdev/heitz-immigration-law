const ServiceTypeCard = ({ service }) => {
  const { title, icon: Icon, details, style } = service;
  return (
    <div className="p-12 flex flex-col items-center bg-white justify-center gap-3 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 ease-linear">
      <Icon className={`text-5xl mb-3 ${style}`} />
      <h2 className="text-[21px] leading-[28px] text-black font-semibold">
        {title}
      </h2>
      <p className="text-[17px] leading-[30px] text-[#676767]">{details}</p>
    </div>
  );
};

export default ServiceTypeCard;
