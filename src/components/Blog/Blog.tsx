import { blogs } from "../../data";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="container py-20">
      <div className="flex items-center mb-10">
        <span className="w-1/2 bg-gray-300 h-[1px] block"></span>
        <h2 className="font-[900] text-3xl flex-shrink-0 px-3">Наш блог</h2>
        <span className="w-1/2 bg-gray-300 h-[1px] block"></span>
      </div>
      <div className="grid grid-cols-3 max-lg:gap-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-10">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="flex items-center uppercase text-lg text-white">
          <span className="py-3 px-5 bg-primary">читать еще</span>
          <span className="py-3 px-5 bg-secondary">
            <i className="fa fa-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Blog;
