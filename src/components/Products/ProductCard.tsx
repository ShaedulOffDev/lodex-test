import { FC, useState } from "react";
import { ProductI } from "../../Types";
import { Link } from "react-router-dom";
import { ShoppingBag } from "../../assets";

interface PropsTypes {
  product: ProductI;
}

const ProductCard: FC<PropsTypes> = ({ product }) => {
  const choice = [false, true, false, false, false, false];
  const [like, setLike] = useState(
    choice[Math.floor(Math.random() * choice.length)]
  );
  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 150);
  };
  return (
    <div className="p-5 max-lg:p-3">
      {product && (
        <div className="w-full">
          <div className="w-full min-h-[250px] relative product-image bg-white">
            <Link to={`products/${product.id}`}>
              <img
                className="w-full max-h-[300px] object-contain h-auto object-center"
                src={product.image}
                alt="photo"
              />
            </Link>
            <div className="absolute hidden z-[1] product-image__info top-0 start-0 w-full h-full bg-gradient-to-t justify-center from-[#00000090] to-transparent items-end pb-10">
              <div className="text-center">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <Link
                    className="text-white text-xl uppercase bg-primary w-[60px] h-[60px] flex items-center justify-center"
                    to={`products/${product.id}`}
                  >
                    <img
                      className="invert"
                      src={ShoppingBag}
                      alt="shopping bag"
                    />
                  </Link>
                  <Link
                    className="text-white text-2xl uppercase bg-primary w-[60px] h-[60px] flex items-center justify-center"
                    to={`products/${product.id}`}
                  >
                    <i className="fa-regular fa-eye"></i>
                  </Link>
                </div>
                <Link
                  className="text-white text-xl uppercase text-center"
                  to={`products/${product.id}`}
                >
                  Подробнее
                </Link>
              </div>
            </div>
            <button
              className="absolute top-2 z-[2] end-2 text-2xl bg-white bg-opacity-20 rounded px-2 py-1"
              onClick={() => setLike(!like)}
            >
              {like ? (
                <i className="fa text-red-500 fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </button>
            {choice[Math.floor(Math.random() * choice.length)] && (
              <span className="absolute uppercase top-2 start-2 text-sm text-white bg-red-500 px-2 py-1">
                хит
              </span>
            )}
          </div>
          <p className="text-center font-[900] text-xl mt-3 mb-2">
            {product.category}
          </p>
          <Link
            to={`products/${product.id}`}
            className="text-lg max-lg:text-base w-full text-center inline-block"
          >
            {product.title.slice(0, 50)}
          </Link>
          <div className="text-center text-lg max-lg:text-sm font-semibold mt-2">
            <span>${formatNumber(product.price)}</span>
            <div className="justify-center flex items-center gap-3 max-lg:gap-2 mt-5">
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">
                {getRandomNumber()}
              </span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">
                {getRandomNumber()}
              </span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">
                {getRandomNumber()}
              </span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">
                {getRandomNumber()}
              </span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">
                {getRandomNumber()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
