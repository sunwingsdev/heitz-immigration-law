import { HiArrowLongRight } from "react-icons/hi2";
import { BsDashLg } from "react-icons/bs";
import { useState } from "react";
import "./ExperienceButton.css"; // Import the CSS file for keyframes

const ExperienceButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="inline-flex text-[#204498] flex-row items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`icon-container ${isHovered ? "animate-icon" : ""}`}>
        {isHovered ? (
          <HiArrowLongRight className="text-3xl" />
        ) : (
          <BsDashLg className="text-3xl" />
        )}
      </div>
      <p
        className={`font-semibold tracking-wide transition-transform duration-300 ease-in-out ${
          isHovered ? "translate-x-2" : ""
        }`}
      >
        Let us know how your experience was with us
      </p>
    </div>
  );
};

export default ExperienceButton;
