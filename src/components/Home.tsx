import About from "./About";
import Categories from "./Categories";
import Landing from "./Landing";
import Products from "./Products/Products";
import Partners from "./Partners";
import Instagram from "./Instagram";
import { products } from "../data";

const Home = () => {
  return (
    <div>
      <Landing/>
      <About />
      <Categories/>
      <Partners/>
      <Products title={"Новинки"} products={products.slice(0, 10)}/>
      <Products title={"Популярное"} products={products.slice(10, 20)}/>
      <Products title={"Распродажа"} products={products.slice(20, 30)}/>
      <Instagram/>
    </div>
  );
};

export default Home;
