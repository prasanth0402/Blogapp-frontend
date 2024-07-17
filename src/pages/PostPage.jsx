import { Link } from "react-router-dom";
import Posts from "../components/Posts";
import blog from "../util/blog";
import post from "../util/post";

const PostPage = () => {
  return (
    <div className="max-w-[80%] mx-auto ">
      <div className="flex mt-7 items-center ">
        <h1 className=" text-2xl font-bold">Explore technology</h1>
        <hr class="w-[70%] h-1 mx-auto border-0 rounded bg-gray-700" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {post.map((post) => (
          <Posts
            key={post.id}
            image={post.image}
            title={post.title}
            details={post.details}
          />
        ))}
      </div>
      <div className="mt-5">
        <hr class="w-[90%] h-[1px] mx-auto border-0 rounded bg-gray-700" />
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          {blog.map((blog) => (
            <div key={blog.id}>
              <h2 className=" font-bold mt-1">Blog articles </h2>
              <Link className="mt-1" to={"/blog"}>
                <h3 className=" to-black font-bold">{blog.title}</h3>
              </Link>
              <Link className="mt-1" to={"/blog"}>
                <p>{blog.detail}</p>
              </Link>
              <hr class=" w-full h-[1px] mx-auto border-0 rounded bg-gray-700 mt-1 mr-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
