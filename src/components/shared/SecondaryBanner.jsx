import { CiDesktopMouse2 } from "react-icons/ci";

const SecondaryBanner = ({ title, text, mouse }) => {
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
        <div className="container mx-auto absolute bottom-32 left-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className=" text-[25px] leading-[32px] lg:text-[45px] lg:leading-[50px] font-bold mb-[25px]">
            {title}
          </h2>
          <p className="text-[18px] px-[1em] py-[.5em] inline-block  font-medium opacity-70">
            {text}
          </p>
          {mouse && <CiDesktopMouse2 className="text-5xl" />}
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
