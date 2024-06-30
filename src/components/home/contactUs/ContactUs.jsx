const ContactUs = () => {
  return (
    <div className="space-y-1.5 bg-[#f7f7f7] p-10">
      <h2 className="text-[30px] leading-[36px] font-bold text-black mb-3">
        Contact us
      </h2>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
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
          <input
            placeholder="Your phone number"
            className="w-full md:w-1/3 bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
            type="email"
            name=""
            id=""
          />
        </div>
        <textarea
          className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950 "
          rows={5}
          placeholder="Write your message or questions here..."
          name=""
          id=""
        ></textarea>

        <button
          className=" uppercase text-base font-bold px-4 py-3 bg-[#204498] text-white rounded-md mt-2"
          type="submit"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
