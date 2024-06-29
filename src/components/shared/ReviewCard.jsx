import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col items-center m-2 space-y-12 text-[#676767]">
      <div className="relative flex flex-row items-start justify-center gap-3 review-card px-11 py-10 rounded-[10px]">
        <FaQuoteLeft className="text-3xl w-1/4" />
        <p className="w-3/4 text-[19px] tracking-tight">{review?.review}</p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-7 h-7 rotate-45 review-card-bg bg-white rounded"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="leading-[22px]">{review?.name}</p>
        <p>{review?.date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
