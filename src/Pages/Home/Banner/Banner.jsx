import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../../../asset/Banner/1.jpg";
import img2 from "../../../asset/Banner/2.jpg";
import img3 from "../../../asset/Banner/3.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative">
          <img src={img1} alt="" />
          <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white px-[5%]">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                Affordable Price For Car Servicing
              </h1>
              <p className="my-1 sm:my-5 text-xs sm:text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <Link to={"/login"} className="flex justify-center items-center">
                <button className="bg-secondary px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
                  View all service <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={img2} alt="" />
          <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white px-[5%]">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                Affordable Price For Car Servicing
              </h1>
              <p className="my-1 sm:my-5 text-xs sm:text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <Link to={"/login"} className="flex justify-center items-center">
                <button className="bg-secondary px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
                  View all service <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={img3} alt="" />
          <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white px-[5%]">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                Affordable Price For Car Servicing
              </h1>
              <p className="my-1 sm:my-5 text-xs sm:text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <Link to={"/login"} className="flex justify-center items-center">
                <button className="bg-secondary px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
                  View all service <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Banner;
