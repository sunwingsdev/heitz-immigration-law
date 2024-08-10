import { Link, useNavigate } from "react-router-dom";
import BookButton from "../../shared/BookButton";
import ServiceCard from "../../shared/ServiceCard";
import { ScrollContext } from "../../../providers/ScrollProvider";
import { useContext } from "react";

const Services = () => {
  const navigate = useNavigate();
  const { targetRef } = useContext(ScrollContext);
  const services = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dahcyec9i/image/upload/v1723272659/service1_imfxwr.jpg",
      title: "Family Visa",
      text: "You may be able to get a green card if you have a family member or spouse in the US who is a US citizen or lawful permanent resident. By marrying a permanent resident of any country in Europe including USA, Canada, New Zealand, London, you can settle there very easily. Click on this easy method to know more.",
      button: "Get Started",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dahcyec9i/image/upload/v1723281484/service2_zgxxbe.jpg",
      title: "Employment Visa",
      text: " We have put together all the details of the United States visa that allows you to work in the United States. Note that without a work visa, you are not authorized to work while visiting the United States. Canada, New Zealand, Australia, Germany, Italy, Croatia, London, etc. If you want to work legally, you need to get a valid work permit visa, then you will only get a work permit, and there is another way to get political protection through SLM. Find out I can help you in this matter. Burn more",
      button: "Get Started",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dahcyec9i/image/upload/v1723272659/service3_xbqz56.jpg",
      title: "Investment Visa",
      text: "Are you dreaming of starting your own business? United States. Canada, New Zealand, Australia, Germany, Italy, Croatia, London, etc Do you own a business in your home country and want to branch out to the United States? We can help put your plans into action.",
      button: "Get Started",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dahcyec9i/image/upload/v1723272658/service4_yycyzj.jpg",
      title: "Citizenship Visa",
      text: "Applying for Naturalization is the ultimate goal. Sometimes there are several steps to take before you get to that stage. We can make it happen.",
      button: "Get Started",
    },
  ];

  const handleScroll = () => {
    // Navigate to /booking and then scroll to targetRef
    navigate("/booking");
    setTimeout(() => {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="container mx-auto ">
      <div className="relative bg-white mt-10 md:pb-[1000px] space-y-12">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-16 relative">
          <div className="lg:w-1/2 h-96 absolute -top-20 left-0">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://player.vimeo.com/video/276157241?dnt=1&app_id=122963"
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
              We will email you a personalized immigration assessment
              questionnaire to complete Before your suggestion. Don&apos;t
              hesitate, you can schedule a meeting with me to find out more
              about your qualifications, but remember you must make an
              appointment with an agency reference
            </p>
            <p className="text-[14px] leading-[16px] pb-2 font-semibold tracking-widest">
              Nadine Heitz, Immigration Attorney
            </p>
            <Link onClick={handleScroll}>
              <BookButton text={"BOOK CONSULTATION"} />
            </Link>
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
              Immigration law can be extremely challenging and complex.
              That&apos;s where I can help. My goal is to help you achieve your
              desired results. I can assist you in some countries such as:
              Canada, USA, UK, Australia, Germany, Poland, Italy, New Zealand
              and European countries including green card, citizenship, or help
              you to avoid deportation. I am always based in USA and I have
              dominance in these countries so I help in visa complexities of
              these countries. I will fight for your right to live and work
              legally
            </p>
            <p className="text-[16px] text-black leading-[1.6em]">
              I was born in Toronto, Canada and I understand how navigating the
              often complex US immigration system can be challenging,
              overwhelming and incredibly stressful. Fortunately I was able to
              achieve my own immigration goal, retaining my Canadian citizenship
              and becoming a US citizen. I have the best of both worlds and want
              to help you achieve your goals!
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:absolute md:-bottom-6">
          {services &&
            services.map((service) => (
              <ServiceCard key={service?.id} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
