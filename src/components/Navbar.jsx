import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav
      className={`navbar ${
        isDarkMode ? "dark:bg-slate-900 text-white" : "bg-white "
      } fixed top-0 inset-x-0 z-40 shadow-lg`}
    >
      <div className="container mx-auto px-6 flex items-center font-nunito justify-between">
        <div className="px-5 text-2xl mb-5 mt-5 font-bold">
          <span className="">
            GrateFul<span className="">Me</span>
          </span>
        </div>

        <div className="font-bold hidden md:flex md:items-center md:space-x-4 mr-52">
          <Link to="/">Home</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
