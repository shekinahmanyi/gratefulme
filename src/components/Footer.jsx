import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="relative p-10 text-primary-content flex flex-col justify-center items-center text-base dark:text-white  bg-custom-blue dark:bg-slate-900">
      <div className="relative z-10 container ">
        <div className="text-center font-custom text-lg mt-12">
          <p className="">Designed & Built with❤️by Sheki Dev✨</p>
          <p className="">&copy; {footerYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
