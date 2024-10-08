import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7 } from "../assets";

const Partners = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-10">
      <Swiper
        slidesPerView={7}
      >
        <SwiperSlide className="flex justify-center px-2">
          <img src={Brand1} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center px-2">
          <img src={Brand2} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center px-2">
          <img src={Brand3} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center px-2">
          <img src={Brand4} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center px-2">
          <img src={Brand5} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center px-2">
          <img src={Brand6} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center px-2">
          <img src={Brand7} alt="brand" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Partners