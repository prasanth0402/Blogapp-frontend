import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const Search = ({ show, setShow }) => {
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const newSearch = e.target.value.trim();
      if (newSearch) {
        setRecentSearches((prevSearches) => {
          const updatedSearches = prevSearches.filter(
            (search) => search !== newSearch
          );
          return [newSearch, ...updatedSearches];
        });
      }
    }
  };

  const handleDeleteSearch = (index) => {
    setRecentSearches((prevSearches) =>
      prevSearches.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      {show ? (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm flex items-center justify-center ">
          <div className="w-1/3 h-[70%] p-4 rounded-md overflow-hidden">
            <div className="w-full max-w-screen-xl mx-auto px-6 flex justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-3 py-2 mb-4">
                  <div className="flex items-center sticky top-0 bg-white dark:bg-gray-900 z-10">
                    <div className="pl-2">
                      <IoIosSearch size={20} />
                    </div>
                    <input
                      className="w-full dark:bg-gray-900 dark:text-white leading-tight focus:outline-none py-2 px-2"
                      id="search"
                      type="text"
                      placeholder="Search Your Blog"
                      onKeyPress={handleSearch}
                    />
                    <button
                      onClick={() => setShow(false)}
                      className=" text-[12px] dark:text-white text-gray-700 rounded-full w-[10%]"
                    >
                      ESC
                    </button>
                  </div>
                  <div className="mt-2 text-sm max-h-[300px] overflow-y-auto">
                    {recentSearches.map((search, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
                      >
                        <div className="flex items-center flex-grow">
                          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                          <div className="font-medium px-2">{search}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-sm font-normal text-gray-500 tracking-wide mr-2">
                            <IoReloadSharp />
                          </div>
                          <button
                            onClick={() => handleDeleteSearch(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <RiDeleteBin5Line />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Search;
