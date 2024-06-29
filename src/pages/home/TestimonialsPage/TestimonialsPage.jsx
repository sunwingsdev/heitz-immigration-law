import ReviewSlider from "../../../components/home/ReviewSlider/ReviewSlider";
import ShareExperience from "../../../components/home/ShareExperience/ShareExperience";
import VideoSlider from "../../../components/home/VideoSlider/VideoSlider";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const TestimonialsPage = () => {
  return (
    <div>
      <SecondaryBanner
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2020/08/f1.jpg"
        }
        title={"Watch our clients talk about their success stories"}
        text={"Your success is our top priority. We hope to add yours too!"}
      />
      <VideoSlider />
      <ReviewSlider />
      <ShareExperience />
    </div>
  );
};

export default TestimonialsPage;
