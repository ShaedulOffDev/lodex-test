import { FC, useState } from "react";
import { ProductI } from "../../Types";
import { Link } from "react-router-dom";
import { ShoppingBag } from "../../assets";

interface PropsTypes {
  product: ProductI;
}

const ProductCard: FC<PropsTypes> = ({ product }) => {
  const [like, setLike] = useState(product.is_favorite);
  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 150)
  }
  return (
    <div className="p-5 max-lg:p-3">
      {product && (
        <div className="w-full">
          <div className="w-full aspect-[3/4] max-sm:aspect-none max-sm:h-[350px] relative product-image bg-gray-100">
            <Link to={`products/${product.token}`}>
              <img
                className="w-full h-full object-contain"
                src={
                  product.image1
                    ? product.image1
                    : "data:image/png;base64,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"
                }
                alt="photo"
              />
            </Link>
            <div className="absolute hidden z-[1] product-image__info top-0 start-0 w-full h-full bg-gradient-to-t justify-center from-[#00000090] to-transparent items-end pb-10">
              <div className="text-center">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <Link
                    className="text-white text-xl uppercase bg-primary w-[60px] h-[60px] flex items-center justify-center"
                    to={`products/${product.token}`}
                  >
                    <img
                      className="invert"
                      src={ShoppingBag}
                      alt="shopping bag"
                    />
                  </Link>
                  <Link
                    className="text-white text-2xl uppercase bg-primary w-[60px] h-[60px] flex items-center justify-center"
                    to={`products/${product.token}`}
                  >
                    <i className="fa-regular fa-eye"></i>
                  </Link>
                </div>
                <Link
                  className="text-white text-xl uppercase text-center"
                  to={`products/${product.token}`}
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
            {product.xit && (
              <span className="absolute uppercase top-2 start-2 text-sm text-white bg-red-500 px-2 py-1">
                хит
              </span>
            )}
          </div>
          <p className="text-center font-[900] text-xl mt-3 mb-2">
            {product.category}
          </p>
          <Link
            to={`products/${product.token}`}
            className="text-lg max-lg:text-base w-full text-center inline-block"
          >
            {product.title.slice(0, 50)}
          </Link>
          <div className="text-center text-lg max-lg:text-sm font-semibold mt-2">
            {product.original_price ? (
              <>
                <span className="line-through me-3 text-gray-400">
                  {formatNumber(product.original_price)}
                  {(product.money_type.toLowerCase() == "евро" ||
                    product.money_type == "euro") &&
                    " y.e."}
                  <span className="inline-block ms-1">
                    {product.money_type.toLowerCase() != "евро" &&
                      product.money_type != "euro" &&
                      product.money_type}
                  </span>
                </span>
                <span className="bg-[#FAE3E8]">
                  {formatNumber(product.price)}
                  {(product.money_type.toLowerCase() == "евро" ||
                    product.money_type == "euro") &&
                    " y.e."}
                  <span className="inline-block ms-1">
                    {product.money_type.toLowerCase() != "евро" &&
                      product.money_type != "euro" &&
                      product.money_type}
                  </span>
                </span>
              </>
            ) : (
              <span>
                {formatNumber(product.price)}
                {(product.money_type.toLowerCase() == "евро" ||
                  product.money_type == "euro") &&
                  " y.e."}
                <span className="inline-block ms-1">
                  {product.money_type.toLowerCase() != "евро" &&
                    product.money_type != "euro" &&
                    product.money_type}
                </span>
              </span>
            )}
            <div className="justify-center flex items-center gap-3 max-lg:gap-2 mt-5">
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">{getRandomNumber()}</span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">{getRandomNumber()}</span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">{getRandomNumber()}</span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">{getRandomNumber()}</span>
              <span className="text-primary bg-[#F7F8F7] px-2 py-1 text-sm max-lg:text-[10px] max-lg:px-2 max-lg:py-0">{getRandomNumber()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
