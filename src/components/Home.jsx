import React from "react";

const Home = ({ isDarkMode }) => {
  console.log("isDarkMode in Home:", isDarkMode);

  return (
    <div
      className={`home-container ${
        isDarkMode ? "dark:bg-slate-900 text-white dark:text-slate-400" : "bg-custom-blue text-black min-h-screen"
      } text-center font-custom pt-32`}
    >
      <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text:4xl md:text-5xl lg:text-6xl">
        Stay grateful in <br />
        your future endeavors
      </h1>
      <p className="text-slate-700  text-base sm:text-sm md:text-xl text-center mt-4">
        <span className="text-center">
        What are you grateful for at the moment ? Send a message to the <br />
        </span>
       future, so you can watch back when you feel tired and overwhelmed and<br /> be grateful to God for how
         far you've come.
      </p>
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 text-white text-base font-medium px-4 py-2 rounded-md mt-6">Record a Message</button>
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white text-base font-medium px-4 py-2 rounded-md mt-6 ml-6">Learn How it's built</button>
    </div>
  );
};

export default Home;
