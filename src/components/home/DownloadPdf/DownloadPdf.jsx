
import BookButton from "../../shared/BookButton";

const DownloadPdf = ({ absolute }) => {
  return (
    <div
      className={`${
        absolute ? "md:absolute -mb-[200px]" : "py-8"
      } bottom-0 left-0 right-0 z-20 flex justify-center text-center items-center bg-[#f6f2f2] max-w-[67rem] mx-auto`}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-12">
        <p className="text-[21px] leading-[28px] font-semibold text-black">
          Learn All the Steps & Timelines
        </p>
        <h4 className="text-[#204498] text-[30px] leading-[36px] font-bold">
          For your Marriage Green Card Case
        </h4>
        <p className="text-black text-[17px] leading-[30px]">
          Grab your copy of our Free Process Chart to find out how your green
          card can be approved.
        </p>
        <BookButton blue={true} text={"DOWNLOAD OUR GUIDE (PDF)"} />
      </div>
    </div>
  );
};

export default DownloadPdf;
