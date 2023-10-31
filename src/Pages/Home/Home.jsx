import Services from "../../Component/Services/Services";
import AboutUs from "../../Component/AboutUs/AboutUs";
import Success from "../../Component/Success/Success";
import WhyChooseUs from "../../Component/WhyChooseUs/WhyChooseUs";
import Slider from "../../Component/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Success />
      <Services />
      <AboutUs />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
