import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const EditProfile = ({ show, setShow, profileData, onUpdate }) => {
  const [name, setName] = useState(profileData.name);
  const [aboutUs, setAboutUs] = useState(profileData.aboutUs);
  const [links, setLinks] = useState(profileData.socialLinks);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [username, setUsername] = useState("");

  const platforms = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://x.com/",
  };

  useEffect(() => {
    setName(profileData.name);
    setAboutUs(profileData.aboutUs);
    setLinks(profileData.socialLinks);
  }, [profileData]);

  const handleAddLink = () => {
    if (selectedPlatform && username) {
      setLinks((prev) => ({
        ...prev,
        [selectedPlatform]: [
          ...(prev[selectedPlatform] || []),
          platforms[selectedPlatform] + username,
        ],
      }));
      setSelectedPlatform("");
      setUsername("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ name, aboutUs, socialLinks: links });
    setShow(false);
  };
  return (
    <>
      {show ? (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm flex items-center justify-center ">
          <div className="w-1/3 h-[400px] bg-white ring-1 ring-slate-200 p-4 rounded-md overflow-hidden">
            <header className="flex justify-between items-center">
              <h1 className=" font-bold text-xl">Edit Profile</h1>
              <button onClick={() => setShow(false)}>
                <IoClose size={20} />
              </button>
            </header>
            <main>
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
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
                        <textarea
                          value={aboutUs}
                          onChange={(e) => setAboutUs(e.target.value)}
                          placeholder="About Us"
                          className="block w-full rounded-md border-0 max-h-[100px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Links
                        </label>
                      </div>
                      <div className="mt-1 flex gap-2">
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter your username"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                        <select
                          value={selectedPlatform}
                          onChange={(e) => setSelectedPlatform(e.target.value)}
                          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        >
                          <option value="">Select Platform</option>
                          {Object.keys(platforms).map((platform) => (
                            <option key={platform} value={platform}>
                              {platform}
                            </option>
                          ))}
                        </select>
                        <button type="button" onClick={handleAddLink}>
                          Add
                        </button>
                      </div>
                    </div>
                    {Object.entries(links).map(([platform, usernames]) => (
                      <div key={platform}>
                        <span>{platform}: </span>
                        {usernames.map((link, index) => (
                          <input
                            key={index}
                            type="text"
                            value={link}
                            onChange={(e) => {
                              const newUsernames = [...usernames];
                              newUsernames[index] = e.target.value;
                              setLinks((prev) => ({
                                ...prev,
                                [platform]: newUsernames,
                              }));
                            }}
                          />
                        ))}
                      </div>
                    ))}

                    <button
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
                      type="submit"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditProfile;
