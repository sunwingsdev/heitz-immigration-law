import BookButton from "../../shared/BookButton";

const Testimonials = ({ call, absolute }) => {
  return (
    <div className="relative">
      <div className="relative -z-10">
        <img
          src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/08/g8.jpg"
          alt=""
          className="w-full h-[300px] md:h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a6ee8] to-[#204498] opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-[22px] md:text-[42px] md:leading-[45px] font-bold mb-4">
              We have successfully helped hundreds of clients win their cases
            </h2>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 justify-center">
              <BookButton blue={true} text={"READ SOME OF OUR TESTIMONIALS"} />
              {call && <BookButton text={"CALL 561-290-252"} />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          absolute ? "md:absolute -mb-[200px]" : "py-8"
        } bottom-0 left-0 right-0 z-20 flex justify-center text-center items-center bg-[#f6f2f2] max-w-[67rem] mx-auto`}
      >
        <div className="flex flex-col items-center justify-center gap-2 p-12">
          <p className="text-[21px] leading-[28px] font-semibold text-black">
            Learn All the Steps & Timelines
          </p>
          <h4 className="text-[#204498] text-[30px] leading-[36px] font-bold">
            For your Marriage Green Card Case
          </h4>
          <p className="text-black text-[17px] leading-[30px]">
            Grab your copy of our Free Process Chart to find out how your green
            card can be approved.
          </p>
          <BookButton blue={true} text={"DOWNLOAD OUR GUIDE (PDF)"} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
