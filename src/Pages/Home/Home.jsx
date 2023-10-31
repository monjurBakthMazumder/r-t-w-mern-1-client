import Services from "../../Component/Services/Services";
import AboutUs from "../../Component/AboutUs/AboutUs";
import Banner from "../../Component/Banner/Banner";
import Success from "../../Component/Success/Success";
import WhyChooseUs from "../../Component/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
        <Success />
        <Services />
        <AboutUs/>
        <WhyChooseUs/>
    </div>
  );
};

export default Home;
