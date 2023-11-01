import AboutUs from "../../Component/AboutUs/AboutUs";
import Banner from "../../Component/Banner/Banner";
import Success from "../../Component/Success/Success";
import TeamSlider from "../../Component/TeamSlider/TeamSlider";
import WhyChooseUs from "../../Component/WhyChooseUs/WhyChooseUs";

const About = () => {
    return (
        <div>
            <Banner title={'About Us'}/>
            <Success/>
            <AboutUs/>
            <TeamSlider/>
            <WhyChooseUs/>
        </div>
    );
};

export default About;