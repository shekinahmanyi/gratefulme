import React from "react";

const Home = ({ isDarkMode }) => {
  return (
    <div
      className={`home-container ${
        isDarkMode ? "dark:bg-slate-900 text-white" : "bg-white text-black"
      } mt-24`}
    >
      <h1>Welcome to GrateFulMe!</h1>
      <p>This is your home page content.</p>
    </div>
  );
};

export default Home;
