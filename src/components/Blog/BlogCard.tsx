import { FC } from "react"
import { BlogI } from "../../Types"

interface PropsTypes {
  blog: BlogI
}

const BlogCard: FC<PropsTypes> = ({blog}) => {
  return (
    <div>
      {blog && (
        <div>
          <div className="h-[300px] max-lg:h-[200px] w-full overflow-hidden bg-gray-200">
            <img src={blog.image} alt="image" className="w-full h-full object-cover"/>
          </div>
          <div>
            <div className="flex justify-between items-center py-3">
              <p className="text-primary font-bold">{blog.created_at}</p>
              <div className="flex gap-5 items-center">
                <p>
                  <i className="fa-regular fa-message me-2"></i>
                  <span>{blog.comments_count}</span>
                </p>
                <p>
                  <i className="fa-regular fa-eye me-2"></i>
                  <span>{blog.views}</span>
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 max-lg:text-lg">
              {blog.title}
            </h3>
            <p className="text-gray-500 max-lg:text-sm">
              {blog.descriptions}
            </p>
            <button className="px-4 py-2 rounded text-primary mt-3 transition-all hover:bg-gray-100 text-xl">
              <i className="fa fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogCard