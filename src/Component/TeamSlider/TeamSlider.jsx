import useLoadEmployee from "../../Hock/useLoadEmployee";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./TeamSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const TeamSlider = () => {
  const teams = useLoadEmployee();
  return (
    <div className="my-10 md:my-20 px-[5%] sm:px-[10%]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Our Team
      </h1>
      <p className="text-neutral sm:text-base font-light mt-3 mb-5 md:w-4/5 lg:w-2/3">
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new normal that has
        evolved from generation X is on the runway heading towards a streamlined
        cloud solution.
      </p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {teams?.map((team) => (
          <SwiperSlide key={team._id}>
            <div className="card card-compact">
              <figure className="p-5 pb-0 h-60">
                <img
                  src={team?.img}
                  alt={`image of ${team?.name}`}
                  className="h-full"
                />
              </figure>
              <div className="card-body text-center">
                <Link to={`/teams/${team?._id}`} className="card-title mx-auto text-primary hover:text-secondary">
                  {team?.name}
                </Link>
                <p className="text-neutral font-light">{team?.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
