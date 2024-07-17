import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm flex items-center justify-center ">
          <div className="w-1/3 h-[70%] p-4 rounded-md overflow-hidden">
            <div className="w-full max-w-screen-xl mx-auto px-6">
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="flex items-center">
                      <div className="pl-2">
                        <IoIosSearch size={20} />
                      </div>
                      <input
                        className="w-full dark:bg-gray-900 leading-tight focus:outline-none py-2 px-2"
                        id="search"
                        type="text"
                        placeholder="Search Your Blog"
                      />
                      <button
                        onClick={() => setShow(false)}
                        className=" text-[12px] dark:text-white text-gray-700 rounded-full w-[10%]"
                      >
                        ESC
                      </button>
                    </div>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                        <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                        <div className="flex-grow font-medium px-2">
                          Tighten Co.
                        </div>
                        <div className="text-sm font-normal text-gray-500 tracking-wide">
                          Team
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                        <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                        <div className="flex-grow font-medium px-2">
                          Tighten Co.
                        </div>
                        <div className="text-sm font-normal text-gray-500 tracking-wide">
                          Team
                        </div>
                      </div>
                    </div>
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
