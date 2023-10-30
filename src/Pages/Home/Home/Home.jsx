import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Success from "../Success/Success";

const Home = () => {
  return (
    <div>
      <Banner />
        <Success />
        <Services />
        <AboutUs/>
    </div>
  );
};

export default Home;
