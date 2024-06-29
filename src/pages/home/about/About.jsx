import ServiceType from "../../../components/home/ServiceType/ServiceType";
import Team from "../../../components/home/Team/Team";
import Testimonials from "../../../components/home/Testimonials/Testimonials";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const About = () => {
  return (
    <div>
      <SecondaryBanner
        title={"We want to open the door to opportunity for you"}
        text={
          "Here are just some ways that we can help you achieve your immigration goals."
        }
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2023/03/Low-res-Outside-All-1-scaled.jpg"
        }
        mouse={true}
      />
      <Team />
      <ServiceType />
      <Testimonials />
    </div>
  );
};

export default About;
