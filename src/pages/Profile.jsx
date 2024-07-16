import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import EditProfile from "../components/EditProfile";

const Profile = ({ sociallink }) => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  /*const [link, setLink] = useState(sociallink); */
  const link = "instagram";

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="col-span-4 sm:col-span-3">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aMNv1yD6kdacpVdHjWO5U56ZhYZiiWjWTw&s"
              className="lg:w-32 lg:h-32 bg-gray-300 rounded-full mb-4 shrink-0 w-20 h-20"
            ></img>
            <h1 className="text-xl font-bold">Vijay</h1>
            <p className="text-gray-700">Actor</p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => setShowEditProfile(true)}
              >
                Edit Profile
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">
                Logout
              </button>
            </div>
          </div>
          <hr className="my-6 border-t border-gray-300" />
        </div>
        <div className=" w-[75%]">
          <div class="col-span-4 sm:col-span-9 ">
            <div class="mt-4 flex flex-col items-center">
              <h2 class="text-xl font-bold mb-4">About Me</h2>
              <p class="text-gray-700">
                Joseph Vijay Chandrasekhar (born 22 June 1974), known
                professionally as Vijay, is an Indian actor and playback singer
                who works in Tamil cinema. In a career spanning in just over 3
                decades, Vijay has acted in over 65 films and is one of the most
                commercially successful actors in Tamil cinema with multiple
                films amongst the highest-grossing Tamil films of all time and
                is amongst the highest paid actors in India.
              </p>

              <h3 class="font-semibold text-center mt-3 -mb-2">Find me on</h3>

              <div class="flex justify-center items-center gap-6 my-6">
                {link === "instagram" ? (
                  <Link
                    class="text-gray-400 hover:text-purple-600"
                    to="https://www.instagram.com/_prasanth.07"
                    target="_blank"
                  >
                    <FaInstagramSquare size={28} />
                  </Link>
                ) : link === "facebook" ? (
                  <Link
                    class="text-gray-400 hover:text-blue-600"
                    to="https://www.instagram.com/_prasanth.07"
                    target="_blank"
                  >
                    <FaFacebookSquare size={28} />
                  </Link>
                ) : link === "linkedin" ? (
                  <Link
                    class="text-gray-400 hover:text-blue-600"
                    to="https://www.instagram.com/_prasanth.07"
                    target="_blank"
                  >
                    <BsLinkedin size={28} />
                  </Link>
                ) : link === "github" ? (
                  <Link
                    class="text-gray-400 hover:text-black"
                    to="https://www.instagram.com/_prasanth.07"
                    target="_blank"
                  >
                    <FaSquareXTwitter size={28} />
                  </Link>
                ) : (
                  <Link
                    class="text-gray-400 hover:text-black"
                    to="https://github.com/prasanth0402"
                    target="_blank"
                  >
                    <FaGithubSquare size={28} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfile show={showEditProfile} setShow={setShowEditProfile} />
    </>
  );
};

export default Profile;
