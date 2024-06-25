const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover"
          src="https://heitzimmigrationlaw.com/wp-content/uploads/2023/03/Low-res-Outside-All-1-scaled.jpg"
          alt=""
        />
        <div className="container mx-auto absolute bottom-32 left-0">
          <h2 className="text-[80px] leading-[75px] text-white font-bold mb-[25px]">
            Heitz Immigration Law
          </h2>
          <p className="bg-[#204498] px-[1em] py-[.5em] inline-block text-white font-medium opacity-70">
            Live & Work in the USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
