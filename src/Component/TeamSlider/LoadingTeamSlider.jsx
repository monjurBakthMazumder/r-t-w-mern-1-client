// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./TeamSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const LoadingTeamSlider = () => {
  return (
    <div>
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
        <SwiperSlide>
          <div className="animate-pulse space-y-3">
            <div className="h-60 bg-primary w-48"></div>
            <div className="h-4 mx-auto bg-primary w-40"></div>
            <div className="h-3 mx-auto bg-primary w-32"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="animate-pulse space-y-3">
            <div className="h-60 bg-primary w-48"></div>
            <div className="h-4 mx-auto bg-primary w-40"></div>
            <div className="h-3 mx-auto bg-primary w-32"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="animate-pulse space-y-3">
            <div className="h-60 bg-primary w-48"></div>
            <div className="h-4 mx-auto bg-primary w-40"></div>
            <div className="h-3 mx-auto bg-primary w-32"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="animate-pulse space-y-3">
            <div className="h-60 bg-primary w-48"></div>
            <div className="h-4 mx-auto bg-primary w-40"></div>
            <div className="h-3 mx-auto bg-primary w-32"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="animate-pulse space-y-3">
            <div className="h-60 bg-primary w-48"></div>
            <div className="h-4 mx-auto bg-primary w-40"></div>
            <div className="h-3 mx-auto bg-primary w-32"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LoadingTeamSlider;
