const GreenCardDetails = ({ card }) => {
  const { icon: Icon, title, titleSpan, text, detailsTypes } = card;
  return (
    <div className="container mx-auto space-y-3 text-black my-16">
      <div className="p-6 rounded-full bg-[#e1e4e7] inline-block">
        <Icon className="text-5xl text-[#204498]" />
      </div>
      <h2 className="text-4xl font-bold">
        {title} <span className="text-[#204498]">{titleSpan}</span>
      </h2>
      {text && <p className="text-[17px] leading-[30px]">{text}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {detailsTypes?.length &&
          detailsTypes?.map((item) => (
            <div key={item?.type} className="space-y-2 p-10 bg-slate-50">
              <h2 className="text-4xl  font-bold">{item?.type}</h2>
              <p className="text-xl font-semibold">{item?.subType}</p>
              <p className="text-[17px] leading-[30px]">{item?.details}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GreenCardDetails;
