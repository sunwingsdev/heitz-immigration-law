// Import React and Swiper dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./videoSlider.css";
import { Pagination } from "swiper/modules";
import ExperienceButton from "../../shared/ExperienceButton";

const VideoSlider = () => {
  return (
    <div className="container mx-auto space-y-4 my-12">
      <h2 className="text-[35px] leading-[38px] font-bold text-black max-w-[700px]">
        We are so proud of these testimonials from our clients, take a look!
      </h2>
      <ExperienceButton text={"Let us know how your experience was with us"} />
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="w-[500px] h-[300px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/CUU2qsdfB4Q?si=dyq94UuWBzMzEARf"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4"></div>
      </div>
    </div>
  );
};

export default VideoSlider;
