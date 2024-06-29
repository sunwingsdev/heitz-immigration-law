const GreenCardHolder = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 my-20">
      <h2 className="text-[42px] leading-[45px] w-full md:w-1/3 font-bold text-black p-4">
        Are you a green card holder?
      </h2>
      <div className="w-full md:w-2/3 space-y-3">
        <h2 className="text-[22px] leading-[28px] font-bold text-black">
          Have you considered taking the steps to become a naturalized U.S.
          citizen?
        </h2>
        <p className="text-[17px]">
          At Heitz Immigration Law, we’ve met many people who have been lawful
          permanent residents for many years without realizing all the ways
          their lives could improve if they seek citizenship. Citizenship opens
          so many doors. It grants you new opportunities and new rights. Read on
          to discover five of the most compelling reasons to become a U.S.
          citizen.
        </p>
      </div>
    </div>
  );
};

export default GreenCardHolder;
