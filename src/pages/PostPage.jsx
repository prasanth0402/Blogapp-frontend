import Posts from "../components/Posts";

const PostPage = () => {
  return (
    <div className="max-w-[80%] mx-auto">
      <div className="flex mt-7 items-center">
        <h1 className=" text-2xl font-bold">Explore technology</h1>
        <hr class="w-[70%] h-1 mx-auto border-0 rounded bg-gray-700" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default PostPage;
