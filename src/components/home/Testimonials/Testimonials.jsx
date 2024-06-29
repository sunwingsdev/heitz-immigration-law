import BookButton from "../../shared/BookButton";
import DownloadPdf from "../DownloadPdf/DownloadPdf";

const Testimonials = ({ call, absolute }) => {
  return (
    <div className="relative">
      <div className="relative -z-10">
        <img
          src="https://heitzimmigrationlaw.com/wp-content/uploads/2020/08/g8.jpg"
          alt=""
          className="w-full h-[300px] md:h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a6ee8] to-[#204498] opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-[22px] md:text-[42px] md:leading-[45px] font-bold mb-4">
              We have successfully helped hundreds of clients win their cases
            </h2>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 justify-center">
              <BookButton blue={true} text={"READ SOME OF OUR TESTIMONIALS"} />
              {call && <BookButton text={"CALL 561-290-252"} />}
            </div>
          </div>
        </div>
      </div>
      <DownloadPdf absolute={absolute} />
    </div>
  );
};

export default Testimonials;
