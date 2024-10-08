import { Swiper, SwiperSlide } from "swiper/react";
import { Delivery, Dino, Flower, HeaderImage } from "../assets";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Landing = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className={`w-full items-center pt-5 flex justify-between bg-gradient-to-r from-light-green2 to-white`}
        >
          <div className="w-1/2 overflow-hidden flex items-center justify-end pe-10 relative">
            <img src={Delivery} className="absolute z-[1] start-[10%]" alt="header image" />
            <img src={HeaderImage} className="z-[2]" alt="header image" />
          </div>
          <div className="w-1/2">
            <h2 className="text-[44px] font-[900]">
              <span>Новая коллекция</span>
              <span className="bg-light-green ms-2 px-2 relative">
                Molo
                <img
                  className="absolute end-0 bottom-full"
                  src={Dino}
                  alt="dino"
                />
              </span>
            </h2>
            <p className="text-xl my-8 max-w-[450px] uppercase relative">
              Комбинезоны и куртки с реалистичными фотопринтами
              <img
                src={Flower}
                alt="flower"
                className="absolute top-full end-1/2"
              />
            </p>
            <button className="bg-primary ps-4 uppercase text-white transition-all hover:bg-secondary">
              <span className="text-md">смотреть</span>
              <span className="bg-secondary py-3 ms-3 px-5 inline-block text-white">
                <i className="fa fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`w-full items-center pt-5 flex justify-between bg-gradient-to-r from-light-green2 to-white`}
        >
          <div className="w-1/2 overflow-hidden flex items-center justify-end pe-10 relative">
            <img src={Delivery} className="absolute z-[1] start-[10%]" alt="header image" />
            <img src={HeaderImage} className="z-[2]" alt="header image" />
          </div>
          <div className="w-1/2">
            <h2 className="text-[44px] font-[900]">
              <span>Новая коллекция</span>
              <span className="bg-light-green ms-2 px-2 relative">
                Molo
                <img
                  className="absolute end-0 bottom-full"
                  src={Dino}
                  alt="dino"
                />
              </span>
            </h2>
            <p className="text-xl my-8 max-w-[450px] uppercase">
              Комбинезоны и куртки с реалистичными фотопринтами
            </p>
            <button className="bg-primary ps-4 uppercase text-white transition-all hover:bg-secondary">
              <span className="text-md">смотреть</span>
              <span className="bg-secondary py-3 ms-3 px-5 inline-block text-white">
                <i className="fa fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`w-full items-center pt-5 flex justify-between bg-gradient-to-r from-light-green2 to-white`}
        >
          <div className="w-1/2 overflow-hidden flex items-center justify-end pe-10 relative">
            <img src={Delivery} className="absolute z-[1] start-[10%]" alt="header image" />
            <img src={HeaderImage} className="z-[2]" alt="header image" />
          </div>
          <div className="w-1/2">
            <h2 className="text-[44px] font-[900]">
              <span>Новая коллекция</span>
              <span className="bg-light-green ms-2 px-2 relative">
                Molo
                <img
                  className="absolute end-0 bottom-full"
                  src={Dino}
                  alt="dino"
                />
              </span>
            </h2>
            <p className="text-xl my-8 max-w-[450px] uppercase">
              Комбинезоны и куртки с реалистичными фотопринтами
            </p>
            <button className="bg-primary ps-4 uppercase text-white transition-all hover:bg-secondary">
              <span className="text-md">смотреть</span>
              <span className="bg-secondary py-3 ms-3 px-5 inline-block text-white">
                <i className="fa fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Landing;
