import VideoSlider from "../../../components/home/VideoSlider/VideoSlider";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const TestimonialsPage = () => {
  return (
    <div>
      <SecondaryBanner
        title={"Watch our clients talk about their success stories"}
        text={"Your success is our top priority. We hope to add yours too!"}
      />
      <VideoSlider />
    </div>
  );
};

export default TestimonialsPage;
