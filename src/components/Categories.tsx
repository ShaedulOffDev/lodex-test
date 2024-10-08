import { Swiper, SwiperSlide } from "swiper/react";
import { Ctg1, Ctg2, Ctg3, Ctg4, Ctg5, Fire } from "../assets";
import { Link } from "react-router-dom";
import "swiper/css";

const Categories = () => {
  return (
    <div className="px-3 max-w-[1440px] border-b-2 mx-auto py-5">
      <Swiper slidesPerView={6} spaceBetween={20}>
        <SwiperSlide>
          <div className="bg-[#F7F8F7] py-5">
            <div className="h-[140px] aspect-square mx-auto">
              <img src={Ctg1} className="h-full" alt="ctg1" />
            </div>
            <div className="text-center mt-5">
              <p className="text-lg font-[900]">Куртки + брюки</p>
              <Link to={'/'} className="hover:bg-light-green2 mt-2 transition-all inline-block text-secondary text-xl px-4 py-2">
                <i className="fa fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F7F8F7] py-5">
            <div className="h-[140px] aspect-square mx-auto">
              <img src={Ctg2} className="h-full" alt="ctg1" />
            </div>
            <div className="text-center mt-5">
              <p className="text-lg font-[900]">Школьная форма</p>
              <Link to={'/'} className="hover:bg-light-green2 mt-2 transition-all inline-block text-secondary text-xl px-4 py-2">
                <i className="fa fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F7F8F7] py-5">
            <div className="h-[140px] aspect-square mx-auto">
              <img src={Ctg3} className="h-full" alt="ctg1" />
            </div>
            <div className="text-center mt-5">
              <p className="text-lg font-[900]">Куртки</p>
              <Link to={'/'} className="hover:bg-light-green2 mt-2 transition-all inline-block text-secondary text-xl px-4 py-2">
                <i className="fa fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F7F8F7] py-5">
            <div className="h-[140px] aspect-square mx-auto">
              <img src={Ctg4} className="h-full" alt="ctg1" />
            </div>
            <div className="text-center mt-5">
              <p className="text-lg font-[900]">Кроссовки</p>
              <Link to={'/'} className="hover:bg-light-green2 mt-2 transition-all inline-block text-secondary text-xl px-4 py-2">
                <i className="fa fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F7F8F7] py-5">
            <div className="h-[140px] aspect-square mx-auto">
              <img src={Ctg5} className="h-full" alt="ctg1" />
            </div>
            <div className="text-center mt-5">
              <p className="text-lg font-[900]">Резиновые сапоги</p>
              <Link to={'/'} className="hover:bg-light-green2 mt-2 transition-all inline-block text-secondary text-xl px-4 py-2">
                <i className="fa fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F95E65] py-5">
            <div className="h-[140px] aspect-square mx-auto">
              <img src={Fire} className="h-full" alt="ctg1" />
            </div>
            <div className="text-center mt-5">
              <p className="text-white text-lg font-[900]">Распродажа</p>
              <Link to={'/'} className="hover:bg-secondary mt-2 transition-all inline-block text-white text-xl px-4 py-2">
                <i className="fa fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
