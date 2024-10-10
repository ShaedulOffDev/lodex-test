import { Swiper, SwiperSlide } from "swiper/react";
import { Delivery, Dino, Flower, HeaderImage } from "../assets";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const Landing = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="max-w-[1920px] mx-auto relative">
      <button
        ref={prevRef}
        className="absolute max-lg:hidden top-1/2 start-2 max-sm:start-0 cursor-pointer -translate-y-1/2 text-xl transition-all hover:text-primary z-[10] hover:bg-gray-200 px-3 py-2 rounded"
      >
        <i className="fa fa-arrow-left-long"></i>
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 max-lg:hidden max-sm:end-0 end-2 cursor-pointer -translate-y-1/2 text-xl transition-all hover:text-primary z-[10] hover:bg-gray-200 px-3 py-2 rounded"
      >
        <i className="fa fa-arrow-right-long"></i>
      </button>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          if (swiper.params.navigation && prevRef.current && nextRef.current) {
            const navigation = swiper.params.navigation;
            if (typeof navigation === "object") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className={`cursor-pointer w-full items-center pt-5 max-lg:flex-col flex justify-between bg-gradient-to-r from-light-green2 to-white`}
        >
          <div className="w-1/2 max-lg:w-full overflow-hidden flex items-center max-xl:justify-center max-xl:p-0 justify-end pe-10 relative">
            <img
              src={Delivery}
              className="absolute z-[1] max-xl:hidden start-[10%]"
              alt="header image"
            />
            <img src={HeaderImage} className="z-[2]" alt="header image" />
          </div>
          <div className="w-1/2 max-lg:w-full max-sm:px-3 max-xl:p-5 max-lg:bg-white max-lg:pb-[50px]">
            <h2 className="text-[44px] max-sm:flex flex-col items-start max-md:text-[36px] font-[900]">
              <span>Новая коллекция</span>
              <span className="bg-light-green ms-2 max-sm:ms-0 px-2 relative">
                Molo
                <img
                  className="absolute end-0 bottom-full max-sm:hidden"
                  src={Dino}
                  alt="dino"
                />
              </span>
            </h2>
            <p className="text-xl max-md:text-lg max-md:my-5 max-md:mt-3 my-8 max-w-[450px] uppercase relative">
              Комбинезоны и куртки с реалистичными фотопринтами
              <img
                src={Flower}
                alt="flower"
                className="absolute top-full end-1/2 max-md:hidden"
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
          className={`cursor-pointer w-full items-center pt-5 max-lg:flex-col flex justify-between bg-gradient-to-r from-light-green2 to-white`}
        >
          <div className="w-1/2 max-lg:w-full overflow-hidden flex items-center max-xl:justify-center max-xl:p-0 justify-end pe-10 relative">
            <img
              src={Delivery}
              className="absolute z-[1] max-xl:hidden start-[10%]"
              alt="header image"
            />
            <img src={HeaderImage} className="z-[2]" alt="header image" />
          </div>
          <div className="w-1/2 max-lg:w-full max-sm:px-3 max-xl:p-5 max-lg:bg-white max-lg:pb-[50px]">
            <h2 className="text-[44px] max-sm:flex flex-col items-start max-md:text-[36px] font-[900]">
              <span>Новая коллекция</span>
              <span className="bg-light-green ms-2 max-sm:ms-0 px-2 relative">
                Molo
                <img
                  className="absolute end-0 bottom-full max-sm:hidden"
                  src={Dino}
                  alt="dino"
                />
              </span>
            </h2>
            <p className="text-xl max-md:text-lg max-md:my-5 max-md:mt-3 my-8 max-w-[450px] uppercase relative">
              Комбинезоны и куртки с реалистичными фотопринтами
              <img
                src={Flower}
                alt="flower"
                className="absolute top-full end-1/2 max-md:hidden"
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
          className={`cursor-pointer w-full items-center pt-5 max-lg:flex-col flex justify-between bg-gradient-to-r from-light-green2 to-white`}
        >
          <div className="w-1/2 max-lg:w-full overflow-hidden flex items-center max-xl:justify-center max-xl:p-0 justify-end pe-10 relative">
            <img
              src={Delivery}
              className="absolute z-[1] max-xl:hidden start-[10%]"
              alt="header image"
            />
            <img src={HeaderImage} className="z-[2]" alt="header image" />
          </div>
          <div className="w-1/2 max-lg:w-full max-sm:px-3 max-xl:p-5 max-lg:bg-white max-lg:pb-[50px]">
            <h2 className="text-[44px] max-sm:flex flex-col items-start max-md:text-[36px] font-[900]">
              <span>Новая коллекция</span>
              <span className="bg-light-green ms-2 max-sm:ms-0 px-2 relative">
                Molo
                <img
                  className="absolute end-0 bottom-full max-sm:hidden"
                  src={Dino}
                  alt="dino"
                />
              </span>
            </h2>
            <p className="text-xl max-md:text-lg max-md:my-5 max-md:mt-3 my-8 max-w-[450px] uppercase relative">
              Комбинезоны и куртки с реалистичными фотопринтами
              <img
                src={Flower}
                alt="flower"
                className="absolute top-full end-1/2 max-md:hidden"
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
          className={`cursor-pointer w-full items-center pt-5 max-lg:flex-col flex justify-between bg-gradient-to-r from-light-green2 to-white`}
        >
          <div className="w-1/2 max-lg:w-full overflow-hidden flex items-center max-xl:justify-center max-xl:p-0 justify-end pe-10 relative">
            <img
              src={Delivery}
              className="absolute z-[1] max-xl:hidden start-[10%]"
              alt="header image"
            />
            <img src={HeaderImage} className="z-[2]" alt="header image" />
          </div>
          <div className="w-1/2 max-lg:w-full max-sm:px-3 max-xl:p-5 max-lg:bg-white max-lg:pb-[50px]">
            <h2 className="text-[44px] max-sm:flex flex-col items-start max-md:text-[36px] font-[900]">
              <span>Новая коллекция</span>
              <span className="bg-light-green ms-2 max-sm:ms-0 px-2 relative">
                Molo
                <img
                  className="absolute end-0 bottom-full max-sm:hidden"
                  src={Dino}
                  alt="dino"
                />
              </span>
            </h2>
            <p className="text-xl max-md:text-lg max-md:my-5 max-md:mt-3 my-8 max-w-[450px] uppercase relative">
              Комбинезоны и куртки с реалистичными фотопринтами
              <img
                src={Flower}
                alt="flower"
                className="absolute top-full end-1/2 max-md:hidden"
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
      </Swiper>
    </div>
  );
};

export default Landing;
