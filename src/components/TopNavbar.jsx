import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Search from "../pages/Search";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

const TopNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };
  const authuser = false;
  return (
    <>
      <nav className="bg-gray-800 sticky top-0 z-50 shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center text-white">
                <Link to={"/"}>
                  <h1 className=" font-bold text-2xl w-auto">Blog</h1>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className=" border-r border-transparent text-white px-3.5"
                onClick={() => setShowSearch(true)}
              >
                <IoIosSearch size={25} />
              </button>
              <button className=" text-white " onClick={toggleDarkMode}>
                <CgDarkMode size={25} />
              </button>

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

                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden md:block">
                    <div className="flex flex-col items-center">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm dark:text-white text-gray-700"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="/createpost"
                        className="block px-4 py-2 text-sm dark:text-white text-gray-700"
                      >
                        Create Post
                      </Link>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 text-sm dark:text-white text-gray-700"
                      >
                        Sign out
                      </Link>
                    </div>
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
      <Search show={showSearch} setShow={setShowSearch} />
    </>
  );
};

export default TopNavbar;
