import BookButton from "./BookButton";

const BookingImmigration = ({ title, details }) => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-16 relative container mx-auto my-8">
      <img
        className="w-2/3 rounded-full md:w-1/4 md:absolute -top-20 left-[95px]"
        src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/08/g13-Nadine-Heitz.jpg"
        alt=""
      />
      <div className="md:w-1/3 lg:w-1/2 hidden md:block"></div>
      <div className="md:w-2/3 lg:w-1/2 space-y-4">
        <h2 className="text-[25px] lg:text-[35px] font-bold leading-[38px] text-black">
          {title}
        </h2>
        <p className="text-[16px] lg:text-[20px] text-black leading-[1.6em]">
          {details}
        </p>
        <BookButton text={"BOOK CONSULTATION"} />
      </div>
    </div>
  );
};

export default BookingImmigration;
