import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const authuser = true;
  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-white">
              <Link to={"/"}>
                <h1 className=" font-bold text-2xl w-auto">Blog</h1>
              </Link>
            </div>

            <div className="pt-2 relative mx-auto text-gray-600">
              <div class="mx-auto max-w-md">
                <form action="" class="relative mx-auto w-max">
                  <input
                    type="search"
                    class="cursor-pointer relative z-10 h-10 w-10 rounded-full border-none bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:pl-16 focus:pr-4"
                  />
                  <IoIosSearch className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent text-white px-3.5" />
                </form>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className=" text-white">
              <Link to={"/"}>
                <FaRegBell size={25} />
              </Link>
            </div>

            {authuser && (
              <div className="relative ml-3">
                <div>
                  <Link to={"/profile"}>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aMNv1yD6kdacpVdHjWO5U56ZhYZiiWjWTw&s"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden md:block">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/createpost"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Create Post
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
            {!authuser && (
              <div className="relative ml-3">
                <Link to="/login" className=" text-white font-bold ">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
