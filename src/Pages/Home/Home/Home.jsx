import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Success from "../Success/Success";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

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
