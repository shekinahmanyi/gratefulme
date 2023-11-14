import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { FaGithub, FaMoon, FaSun, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav
      className={`navbar ${
        isDarkMode
          ? "dark:bg-slate-900 text-white border-b-slate-700"
          : "bg-white border-b-200 "
      } sticky top-0 inset-x-0 z-40 border-b font-custom `}
    >
      <div className="container mx-auto px-6 flex items-center font-nunito justify-between">
        <div className="px-5 text-xl mb-5 mt-5 font-bold">
          <span className="">gratefulme </span>
        </div>

        <div className="flex items-center space-x-4 ">
          <a
            href="https://github.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ShekinahManyi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/shekinah-manyi-849a21210/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-lg"
          >
            <FaLinkedin />
          </a>
          <button onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
