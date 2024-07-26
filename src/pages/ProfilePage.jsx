import { useState } from "react";

import { Link } from "react-router-dom";
import EditProfile from "../components/EditProfile";

const ProfilePage = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center  text-black dark:text-white">
        <div className="col-span-4 sm:col-span-3">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aMNv1yD6kdacpVdHjWO5U56ZhYZiiWjWTw&s"
              className="lg:w-32 lg:h-32 bg-gray-300 rounded-full mb-4 shrink-0 w-20 h-20"
            ></img>
            <h1 className="text-xl font-bold">Vijay</h1>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => setShowEditProfile(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <hr className="my-6 border-t border-gray-300" />
        </div>
        <div className=" w-[75%]">
          <div class="col-span-4 sm:col-span-9 ">
            <div class="mt-4 flex flex-col items-center">
              <h2 class="text-xl font-bold mb-4">About Me</h2>
              <p class="  text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quisquam doloremque quo distinctio quis ratione saepe atque
                quidem, ad dolorem, doloribus qui rerum. Quos magnam impedit
                quod quis id aliquam.
              </p>

              <h3 class="font-semibold text-center mt-3 -mb-2">Find me on</h3>

              <div class="flex justify-center items-center gap-2 my-6">
                <Link
                  className="text-gray-400 dark:hover:text-white hover:text-black"
                  to={"/"}
                  target="_blank"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfile show={showEditProfile} setShow={setShowEditProfile} />
    </>
  );
};

export default ProfilePage;