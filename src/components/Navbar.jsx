import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { FaGithub, FaMoon, FaSun, FaTwitter, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <container
      className={`navbar ${
        isDarkMode ? "dark:bg-slate-900 text-white" : "bg-white "
      } fixed top-0 inset-x-0 z-40 shadow-lg dark:border-b-slate-700`}
    >
      <nav className="container mx-auto px-6 flex items-center font-nunito justify-between">
        <div className="px-5 text-2xl mb-5 mt-5 font-bold">
          <span className="">
            gratefulme
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ShekinahManyi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/shekinah-manyi-849a21210/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2"
          >
            <FaLinkedin />
          </a>
          <button onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
   
    </container>
  );
};

export default Navbar;
