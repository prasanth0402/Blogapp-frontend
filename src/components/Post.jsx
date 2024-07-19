import { useParams } from "react-router-dom";
import blogposts from "../util/blogpost";

const Post = () => {
  const { id } = useParams();
  const postDetails = blogposts.find((p) => p.id === parseInt(id));

  if (!postDetails) {
    return <div>Post not found</div>;
  }
  return (
    <div className="mt-0">
      <div className="h-[200px]">
        <div className="max-w-[80%] mx-auto">
          <div className="mt-7 items-center">
            <h2 className=" font-bold text-sm">BLOG ARTICLES</h2>
            <h1 className="lg:text-5xl text-3xl font-bold mt-2">
              {postDetails.title}
            </h1>
          </div>
          <p className=" font-bold mt-5">
            By {postDetails.author} | {postDetails.date}
          </p>
        </div>
      </div>
      <div className="max-w-[77%] mx-auto">
        <div className="mt-2 flex flex-col items-center">
          <p>{postDetails.content}</p>
          <h2 className=" lg:text-4xl text-2xl font-bold mt-2">
            {postDetails.subtitle1}
          </h2>
          <p className="mt-2">{postDetails.subcontent1}</p>
          <h2 className="  lg:text-4xl text-2xl font-bold mt-2">
            {postDetails.subtitle2}
          </h2>
          <p className="mt-2">{postDetails.subcontent2}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
