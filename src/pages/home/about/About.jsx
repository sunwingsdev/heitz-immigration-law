import ServiceType from "../../../components/home/ServiceType/ServiceType";
import Team from "../../../components/home/Team/Team";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const About = () => {
  return (
    <div>
      <SecondaryBanner
        title={"We want to open the door to opportunity for you"}
        text={
          "Here are just some ways that we can help you achieve your immigration goals."
        }
        mouse={true}
      />
      <Team />
      <ServiceType />
    </div>
  );
};

export default About;
