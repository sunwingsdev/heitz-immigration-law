import BookButton from "./BookButton";

const ServiceCard = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-3 shadow-md px-2 py-10 bg-white">
      <img
        className="w-1/3"
        src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/b1.jpg"
        alt=""
      />
      <div className="w-2/3 px-3 space-y-3">
        <h2 className="text-[30px] leading-[36px] font-bold">Family</h2>
        <p>
          You may be able to get a green card if you have a family member or
          spouse in the United States that is a U.S. citizen or a lawful
          permanent resident.
        </p>
        <BookButton blue={true} text={"GREEN CARDS"} />
      </div>
    </div>
  );
};

export default ServiceCard;
