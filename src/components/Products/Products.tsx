import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { ProductI } from "../../Types";
import { FC, useEffect, useRef, useState } from "react";

interface PropsTypes {
  products: ProductI[];
  title: string;
}
const Products: FC<PropsTypes> = ({ products, title }) => {
  const [perPage, setPerPage] = useState(4)
  useEffect(()=>{
    if(window.innerWidth < 1280 && window.innerWidth > 767){
      setPerPage(3)
    }else if(window.innerWidth <= 767 && window.innerWidth > 500){
      setPerPage(2)
    }else if(window.innerWidth <= 500){
      setPerPage(1)
    }else{
      setPerPage(4)
    }
  }, [])
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <div className="container max-md:max-w-none mb-10 py-3 px-10 max-sm:px-5 relative">
      <div className="flex justify-between items-center gap-3 mb-3">
        <div className="border-t text-center w-full">
          <h3 className="bg-white text-3xl max-lg:text-2xl max-sm:text-xl font-[900] relative -top-2 inline-block px-2">
            {title}
          </h3>
        </div>
        <button className="flex-shrink-0 border max-md:text-base max-sm:text-sm border-[#B7DEBF] transition-all hover:bg-[#0CA145] hover:text-white text-[#0CA145] px-3 uppercase text-lg py-2">
          все новинки
        </button>
      </div>
      <button
        ref={prevRef}
        className="absolute top-1/2 start-2 max-sm:start-0 cursor-pointer -translate-y-1/2 text-xl transition-all hover:text-primary z-[10] hover:bg-gray-200 px-3 py-2 rounded"
      >
        <i className="fa fa-arrow-left-long"></i>
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 max-sm:end-0 end-2 cursor-pointer -translate-y-1/2 text-xl transition-all hover:text-primary z-[10] hover:bg-gray-200 px-3 py-2 rounded"
      >
        <i className="fa fa-arrow-right-long"></i>
      </button>
      <Swiper
        slidesPerView={perPage}
        modules={[Navigation]}
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
      >
        {products.length ? (
          products.map((p) => (
            <SwiperSlide key={p.token}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))
        ) : (
          <div className="py-20 text-[50px] text-center text-gray-500">
            <i className="fa fa-circle-notch fa-spin"></i>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Products;
