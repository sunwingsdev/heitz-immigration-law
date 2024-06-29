const ShareExperience = () => {
  return (
    <div className="container mx-auto space-y-1.5 my-16">
      <h2 className="text-[30px] leading-[36px] font-bold text-black">
        Share your experience with us
      </h2>
      <p className="text-[17px] leading-[30px] text-[#676767] pb-2">
        We’d love to hear from you and let others read your experience
      </p>
      <textarea
        className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950 "
        rows={5}
        placeholder="Share with us your experience"
        name=""
        id=""
      ></textarea>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <input
            placeholder="Your name"
            className="w-full md:w-1/3 bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="Your email"
            className="w-full md:w-1/3 bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
            type="email"
            name=""
            id=""
          />
          <button
            className="w-full md:w-1/3 uppercase font-bold px-[22px] py-[15px] bg-[#204498] text-white rounded-md"
            type="submit"
          >
            submit my story
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareExperience;
