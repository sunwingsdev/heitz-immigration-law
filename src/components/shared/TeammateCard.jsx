const TeammateCard = ({ teammate }) => {
  return (
    <div className="p-[30px] shadow-sm space-y-5">
      <img className="w-full" src={teammate?.image} alt="" />
      <h2 className="text-3xl font-bold">{teammate?.name}</h2>
      <p className="text-sm text-[#204498] font-semibold">
        {teammate?.destination}
      </p>
      <p className="text-[17px] leading-[30px]">{teammate?.details}</p>
    </div>
  );
};

export default TeammateCard;
