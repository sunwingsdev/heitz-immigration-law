import { CiDesktopMouse2 } from "react-icons/ci";

const SecondaryBanner = ({ title, text, mouse, image }) => {
  return (
    <div>
      <div className="relative h-[600px]">
        {/* Set the desired height */}
        <img className="object-cover w-full h-full" src={image} alt="" />
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-50"></div>
        <div className="container mx-auto absolute bottom-32 left-[5px] md:left-[30px] 2xl:left-[20%] inline-flex  flex-col justify-center items-start text-white">
          <h2 className=" text-[25px] leading-[32px] lg:text-[45px] lg:leading-[50px] font-bold mb-[25px]">
            {title}
          </h2>
          <p className="text-[18px] py-[.5em] inline-block  font-medium opacity-70">
            {text}
          </p>
          {mouse && <CiDesktopMouse2 className="text-5xl" />}
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
