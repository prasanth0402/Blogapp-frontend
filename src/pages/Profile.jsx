import { useState, useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profileData, setProfileData] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          aboutUs: "",
          socialLinks: {},
        };
  });

  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
  }, [profileData]);

  const handleUpdateProfile = (newData) => {
    setProfileData(newData);
  };

  const renderSocialIcon = (platform) => {
    switch (platform) {
      case "instagram":
        return <FaInstagramSquare size={28} />;
      case "facebook":
        return <FaFacebookSquare size={28} />;
      case "linkedin":
        return <BsLinkedin size={28} />;
      case "github":
        return <FaGithubSquare size={28} />;
      case "twitter":
        return <FaSquareXTwitter size={28} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="col-span-4 sm:col-span-3">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aMNv1yD6kdacpVdHjWO5U56ZhYZiiWjWTw&s"
              className="lg:w-32 lg:h-32 bg-gray-300 rounded-full mb-4 shrink-0 w-20 h-20"
            ></img>
            <h1 className="text-xl font-bold">{profileData.name}</h1>
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
              <p class="bg-white dark:bg-gray-900 text-black dark:text-white">
                {profileData.aboutUs}
              </p>

              <h3 class="font-semibold text-center mt-3 -mb-2">Find me on</h3>

              <div class="flex justify-center items-center gap-2 my-6">
                {Object.entries(profileData.socialLinks).map(
                  ([platform, links]) =>
                    links.map((link, index) => (
                      <Link
                        key={`${platform}-${index}`}
                        className="text-gray-400 dark:hover:text-white hover:text-black"
                        to={link}
                        target="_blank"
                      >
                        {renderSocialIcon(platform)}
                      </Link>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfile
        show={showEditProfile}
        setShow={setShowEditProfile}
        profileData={profileData}
        onUpdate={handleUpdateProfile}
      />
    </>
  );
};

export default Profile;
