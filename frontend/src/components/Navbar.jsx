import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { TbNews } from "react-icons/tb";
import { useFirebase } from "../pages/AuthContext";
import { FaUserTie } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const firebase = useFirebase();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "GameChain";
      case "/about":
        return "About";
      case "/news":
        return "News";
      default:
        return "GameChain";
    }
  };

  const handlelogout = async () => {
    await firebase.signOut();
    navigate("/auth");
  };

  return (
    <nav className="bg-cgrey fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Logo" />
          <span className=" text-chighlights self-center text-2xl font-semibold chighlightsspace-nowrap ">
            {getTitle()}
          </span>
        </div>
        <div
          title="Login"
          className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <button
            type="button"
            className="text-chighlights bg-caccent hover:bg-orange-600 font-medium rounded-full text-sm px-4 py-2 text-center "
          >
            <div className="flex items-center justify-center gap-1">
              {firebase.isLoggedIn ? (
                <div
                  className="flex items-center justify-center"
                  onClick={handlelogout}
                >
                  <p className="mr-3">{firebase.userName}</p>
                  <FiLogOut />
                </div>
              ) : (
                <FiLogIn />
              )}
            </div>
          </button>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-chighlights rounded-lg md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-caccent border-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === "/"
                    ? "text-caccent"
                    : "text-chighlights"
                }  md:p-0`}
              >
                <div className="flex items-center justify-center gap-1">
                  <IoHomeOutline /> <p className="text-lg">Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === "/about"
                    ? "text-caccent"
                    : "text-chighlights"
                }  md:p-0`}
              >
                <div className="flex items-center justify-center gap-1">
                  <AiOutlineInfoCircle /> <p className="text-lg">About</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === "/news"
                    ? "text-caccent"
                    : "text-chighlights"
                }  md:p-0`}
              >
                <div className="flex items-center justify-center gap-1">
                  <TbNews /> <p className="text-lg">News</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === "/admin"
                    ? "text-caccent"
                    : "text-chighlights"
                }  md:p-0`}
              >
                <div className="flex items-center justify-center gap-1">
                  <FaUserTie /> <p className="text-lg">Admin</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
