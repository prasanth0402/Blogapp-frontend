import { Link } from "react-router-dom";

const Posts = ({ image, title, details }) => {
  return (
    <div className="mt-3">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={"/blog"}>
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={"/blog"}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
