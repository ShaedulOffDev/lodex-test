import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductI } from "../../Types";
import { SwiperSlide, Swiper } from "swiper/react";
import Fancybox from "../Fancybox";
import About from "../About";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const ProductDetails = () => {
  const { id } = useParams();
  const choice = [false, true, false, false, false, false];
  const [product, setProduct] = useState<ProductI | null>(null);
  const images = [
    product?.image || "https://picsum.photos/500?random=1",
    "https://picsum.photos/500?random=2",
    "https://picsum.photos/500?random=3",
    "https://picsum.photos/500?random=4",
    "https://picsum.photos/500?random=5",
    "https://picsum.photos/500?random=6",
  ];
  const [active, setActive] = useState(
    product?.image || "https://picsum.photos/500"
  );
  const [like, setLike] = useState<boolean>(
    choice[Math.floor(Math.random() * choice.length)]
  );

  useEffect(() => {
    if (id) {
      const get = async () => {
        try {
          const res = await fetch(
            `https://fakestoreapi.com/products/${id}`
          ).then((res) => res.json());
          setProduct(res);
        } catch (error) {
          console.log("API'da xatolik yuz berdi!");
          return error;
        }
      };
      get();
    }
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    if (product) {
      setActive(product.image);
    }
  }, [product]);
  const activeHander = (image: string) => {
    setActive(image);
  };
  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <div className="min-h-[70vh]">
      <div className="container py-3 max-md:p-0 border-t-2 max-ls:max-w-none max-ls:px-0">
        {product == null ? (
          <div className="py-5 text-center">
            <i className="fa fa-spin fa-circle-notch text-5xl"></i>
          </div>
        ) : (
          <div className="grid max-md:grid-cols-1 grid-cols-2 mb-4">
            <div className="w-full">
              <Fancybox>
                <div className="bg-white w-full aspect-[16/13] mb-2 max-md:hidden">
                  <img
                    data-fancybox={window.innerWidth > 768 ? "gallery" : ""}
                    className="w-full h-full object-contain"
                    src={active}
                    alt="image"
                  />
                </div>
                {images.length > 0 && (
                  <Swiper
                    slidesPerView={window.innerWidth > 767 ? 4 : 1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide
                        key={index}
                        onClick={() => activeHander(image)}
                      >
                        <span
                          className={`w-full aspect-[4/3] box-border max-md:border-none max-md:aspect-square border-4 ${
                            active == image && "border-primary"
                          } overflow-hidden block`}
                        >
                          <img
                            data-fancybox={
                              index == 0
                                ? window.innerWidth < 768
                                  ? "gallery"
                                  : ""
                                : "gallery"
                            }
                            className="w-full h-full object-contain"
                            src={image}
                            alt="image"
                          />
                        </span>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </Fancybox>
            </div>
            <div className="w-full p-5 max-md:px-0 max-ls:p-3 text-center max-md:pt-5 pt-10">
              <p className="text-gray-400 mb-10 max-md:mb-5 uppercase">
                {product.category}
              </p>
              <h3 className="text-2xl max-sm:text-xl max-sm:font-normal capitalize font-bold">
                {product.title}
              </h3>
              <span className="font-[900] mt-2 inline-block text-lg bg-red-200 px-2 py-1">
                ${formatNumber(product.price)}
              </span>
              <p className="text-red-500 mt-4">
                🔥 Черная пятница: скидка действует до 28 ноября
              </p>
              <p className="mt-3">
                Доставим бесплатно!* Оплата долями от 5 225 ₽
              </p>
              <div className="flex justify-center gap-3 mt-7">
                <span className="block px-2 py-1 text-sm bg-gray-100 text-primary">
                  104
                </span>
                <span className="block px-2 py-1 text-sm bg-gray-100 text-primary">
                  110
                </span>
                <span className="block px-2 py-1 text-sm bg-gray-100 text-primary">
                  116
                </span>
                <span className="block px-2 py-1 text-sm bg-gray-100 text-primary">
                  140
                </span>
              </div>
              <p className="text-primary mt-4">Таблица размеров</p>
              <div className="flex justify-center items-center max-sm:gap-3 gap-5 mt-6 max-sm:px-3">
                <button className="uppercase bg-primary px-8 py-2 text-2xl max-sm:w-full text-white">
                  в корзину
                </button>
                <button
                  className="text-3xl flex-shrink-0 bg-gray-100 px-3 py-2"
                  onClick={() => setLike(!like)}
                >
                  {like ? (
                    <i className="fa text-red-500 fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                </button>
              </div>
              <div className="mt-10">
                <p>Другие расцветки:</p>
                <div className="flex justify-center items-center max-sm:gap-5 gap-8 mt-4">
                  <span className="w-[40px] max-sm:w-[30px] aspect-square rounded-full overflow-hidden">
                    <img src="https://picsum.photos/40?random=1" alt="photo" />
                  </span>
                  <span className="w-[40px] max-sm:w-[30px] aspect-square rounded-full overflow-hidden">
                    <img src="https://picsum.photos/40?random=2" alt="photo" />
                  </span>
                  <span className="w-[40px] max-sm:w-[30px] aspect-square rounded-full overflow-hidden">
                    <img src="https://picsum.photos/40?random=3" alt="photo" />
                  </span>
                  <span className="w-[40px] max-sm:w-[30px] aspect-square rounded-full overflow-hidden">
                    <img src="https://picsum.photos/40?random=4" alt="photo" />
                  </span>
                  <span className="w-[40px] max-sm:w-[30px] aspect-square rounded-full overflow-hidden">
                    <img src="https://picsum.photos/40?random=5" alt="photo" />
                  </span>
                </div>
                <div className="flex justify-center max-sm:flex-wrap gap-3 items-center mt-4">
                  <Link
                    className="text-primary border-b border-dashed border-primary"
                    to={"/"}
                  >
                    Доставка и оплата
                  </Link>
                  <span className="block h-[20px] w-[1px] bg-primary"></span>
                  <Link
                    className="text-primary border-b border-dashed border-primary"
                    to={"/"}
                  >
                    Доставка и оплата
                  </Link>
                  <span className="block h-[20px] w-[1px] bg-primary"></span>
                  <Link
                    className="text-primary border-b border-dashed border-primary"
                    to={"/"}
                  >
                    Доставка и оплата
                  </Link>
                </div>
                <button className="uppercase text-md bg-gray-100 px-5 rounded-3xl py-3 mt-10">
                  <i className="fa me-2 fa-play"></i>
                  смотреть видеообзор
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <About />
      <div className="border-b p-3 max-ls:px-3 bg-white container mt-10 pb-20">
        <h3 className="text-2xl border-b pb-1 mb-4">описание</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: product ? product.description : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductDetails;
