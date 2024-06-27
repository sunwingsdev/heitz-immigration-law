import Banner from "../../../components/home/Banner/Banner";
import Services from "../../../components/home/Services/Services";
import Testimonials from "../../../components/home/Testimonials/Testimonials";
import News from "../../../components/home/news/News";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Testimonials call={true} absolute={true} />
      <News />
    </div>
  );
};

export default Home;
