import { useState } from "react";
import { IoClose } from "react-icons/io5";

const EditProfile = ({ show, setShow, func }) => {
  return (
    <>
      {show ? (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm flex items-center justify-center">
          <div className="w-1/3 h-[400px] bg-white ring-1 ring-slate-200 p-4 rounded-md">
            <header className="flex justify-between items-center">
              <h1 className=" font-bold text-xl">Edit Profile</h1>
              <button onClick={() => setShow(false)}>
                <IoClose size={20} />
              </button>
            </header>
            <main>
              <form>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                  <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            About Me
                          </label>
                        </div>
                        <div className="mt-1">
                          <textarea className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium leading-6 text-gray-900">
                            Links
                          </label>
                        </div>
                        <div className="mt-1 flex gap-2">
                          <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                          <select
                            onChange={(e) => {
                              func(e.target.value);
                            }}
                            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          >
                            <option value="github">Github</option>
                            <option value="twitter">Twitter</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="instagram">Instagram</option>
                            <option value="facebook">Facebook</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <button
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
                          onClick={() => func()}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </main>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditProfile;
