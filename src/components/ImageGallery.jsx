import React from "react";
import sheki from "../images/sheki.jpeg";
//import { Transition } from "@headlessui/react";

const ImageGallery = () => {
    // const showImage = true;

    return (
        <div className="flex flex-col sm:flex-row w-1/2 h-fit mt-32 text-center sm:w-1/2 sm:h-fit sm:mt-0 sm:ml-0 sm:mr-0">
            <div className="ml-12 sm:mb-0">
                <img
                    src={sheki}
                    alt="shekinah"
                    className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
                />
            </div>
            <div className="ml-32 ">
                <img
                    src={sheki}
                    alt="shekinah"
                    className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
                />
            </div>
            <div className="ml-32 ">
                <img
                    src={sheki}
                    alt="shekinah"
                    className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
                />
            </div>
        </div>
    );
};

export default ImageGallery;
