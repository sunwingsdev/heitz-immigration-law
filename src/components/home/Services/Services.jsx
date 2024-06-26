import BookButton from "../../shared/BookButton";
import ServiceCard from "../../shared/ServiceCard";

const Services = () => {
  return (
    <div className="container mx-auto ">
      <div className="relative bg-white mt-10 pb-[850px] space-y-12">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-16 relative">
          <div className="lg:w-1/2 h-96 absolute -top-20 left-0">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/CUU2qsdfB4Q?si=dyq94UuWBzMzEARf"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-[35px] font-bold leading-[38px] text-black">
              Book your immigration consultation with our attorney by contacting
              us today.
            </h2>
            <p className="text-[20px] text-black leading-[1.6em]">
              We will send you a personalized immigration assessment
              questionnaire via email to complete before your consultation.
              Don&apos;t hesitate, call now to learn more about your eligibility
              for immigration options.
            </p>
            <p className="text-[14px] leading-[16px] font-semibold tracking-widest">
              Nadine Heitz, Immigration Attorney
            </p>
            <BookButton text={"BOOK CONSULTATION"} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-start gap-16">
          <img
            className="lg:w-1/2"
            src="https://heitzimmigrationlaw.com/wp-content/uploads/2021/03/Team-desk-full-shot-1536x1064.jpg"
            alt=""
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-[35px] font-bold leading-[38px] text-black">
              I want to open the door to opportunity for you.
            </h2>
            <p className="text-[16px] text-black leading-[1.6em]">
              Immigration laws can be extremely challenging and complex. That’s
              where I can help. My goal is to help you achieve your desired
              outcome. Whether this may be getting a green card, citizenship, or
              helping you to avoid being deported, I will always fight for your
              rights to live and work legally in the United States.
            </p>
            <p className="text-[16px] text-black leading-[1.6em]">
              I was born in Toronto, Canada and I understand how navigating the
              often complex U.S. immigration system can be challenging,
              overwhelming, and incredibly stressful. Luckily I was able to
              achieve my own immigration goal, of becoming a U.S. citizen while
              still holding my Canadian citizenship. I have the best of both and
              I want to help you achieve your goals too!
            </p>
            <h4 className="text-[21px] leading-[28px] text-black font-semibold">
              I look forward to “opening the door to opportunity” for you, your
              family and your loved ones. Contact me.
            </h4>
            <p className="text-[14px] leading-[16px] font-semibold tracking-widest">
              Nadine Heitz, Immigration Attorney
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 absolute -bottom-6">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
