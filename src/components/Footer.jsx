import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 mt-5 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                Blog
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-500 font-medium">
                <li className="mb-4">
                  <Link
                    to={"/"}
                    className="hover:underline dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://tailwindcss.com/"
                    className="hover:underline dark:hover:text-white"
                  >
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-500 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://github.com/"
                    className="hover:underline dark:hover:text-white"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://discord.gg/"
                    className="hover:underline dark:hover:text-white"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-500  font-medium">
                <li className="mb-4">
                  <Link
                    to="/"
                    className="hover:underline dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:underline dark:hover:text-white"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-500 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Blog™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              to="/"
              className="text-gray-500 hover:text-white dark:hover:text-white"
            >
              <FaFacebookF className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:text-white dark:hover:text-white ms-5"
            >
              <FaDiscord className="w-5 h-5" />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-white dark:hover:text-white ms-5"
            >
              <FaXTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:text-white dark:hover:text-white ms-5"
            >
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-white dark:hover:text-white ms-5"
            >
              <AiFillInstagram className="w-5 h-5" />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
