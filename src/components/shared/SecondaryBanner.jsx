const SecondaryBanner = ({ title, text, typeWritter, mouse }) => {
  return (
    <div>
      <div className="relative h-[600px]">
        {/* Set the desired height */}
        <img
          className="object-cover w-full h-full"
          src="https://heitzimmigrationlaw.com/wp-content/uploads/2023/03/Low-res-Outside-All-1-scaled.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-70"></div>
        <div className="container mx-auto absolute bottom-32 left-0">
          <h2 className=" text-[40px] leading-[38px] lg:text-[80px] lg:leading-[75px] text-white font-bold mb-[25px]">
            {title}
          </h2>
          <p className="bg-[#204498] px-[1em] py-[.5em] inline-block text-white font-medium opacity-70">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;