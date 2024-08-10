const Banner = () => {
  const countries = [
    "canada",
    "usa",
    "australia",
    "uk-london",
    "poland",
    "france",
    "germany",
    "italy",
    "hungary",
    "new zealand",
  ];
  return (
    <div>
      <div className="relative h-[600px]">
        {/* Set the desired height */}
        <img
          className="object-cover w-full h-full"
          src="https://heitzimmigrationlaw.com/wp-content/uploads/2023/03/Low-res-Outside-All-1-scaled.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-50"></div>
        <div className="container mx-auto absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center text-white">
          <h2 className="text-[20px] leading-[28px] lg:text-[50px] lg:leading-[75px] bg-[#204498] py-2 px-8 text-white font-bold mb-[25px] text-center">
            Heitz World Immigration Law
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {countries &&
              countries.map((country) => (
                <p
                  key={country}
                  className="bg-[#ff3f3f] uppercase px-[1em] py-[.5em] inline-block text-white font-medium text-center"
                >
                  {country}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
