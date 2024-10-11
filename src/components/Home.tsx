import About from "./About";
import Categories from "./Categories";
import Landing from "./Landing";
import Products from "./Products/Products";
import Partners from "./Partners";
import Instagram from "./Instagram";
// import { products } from "../data";
import Blog from "./Blog/Blog";
import { useEffect, useState } from "react";
import { ProductI } from "../Types";

const Home = () => {
  const [products, setProducts] = useState<ProductI[] | null>();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/").then(
          (res) => res.json()
        );
        setProducts(res);
      } catch (error) {
        console.log('API\'da xatolik');
        return error
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <Landing />
      <About />
      <Categories />
      <Partners />
      {products && products?.length > 0 && (
        <>
          <Products title={"Новинки"} products={products.slice(0, 8)} />
          <Products title={"Популярное"} products={products.slice(8, 14)} />
          <Products title={"Распродажа"} products={products.slice(14, 20)} />
        </>
      )}
      <Instagram />
      <Blog />
    </div>
  );
};

export default Home;
