import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="mt-3">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={"/post"}>
          <img
            className="rounded-t-lg"
            src="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/legacy-header-images/header-blog-bing-chatGPT-feature.jpg"
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link to={"/post"}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ChatGPT's new &#10075;Browse with Bing&#10076;: Watching AIs stalk
              you is odd
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            New Bing-powered ChatGPT cares about providing reliable sources,
            taking its time, and finding out what you had for...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
