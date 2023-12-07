
import React from 'react';
import sheki from "../images/sheki.jpeg";
import { Transition } from '@headlessui/react';

const ImageGallery = () => {
    const showImage = true;

    return (
        <div className="flex w-80 h-90 mt-16  mx-auto my-auto text-center sm:flex-row sm:w-50 sm:h-50 sm:mt-0 sm:ml-0 sm:mr-0">
            <Transition
                show={showImage}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <img
                    src={sheki}
                    alt="shekinah"
                    className="rounded-lg object-cover w-full h-full scale-125 origin-top-left mr-32"
                />
            </Transition>

            <Transition
                show={showImage}
                enter="transition-opacity duration-500 delay-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <img
                    src={sheki}
                    alt="shekinah"
                    className="rounded-lg object-cover w-full h-full scale-125 origin-top-left mr-32"
                />
            </Transition>
        </div>
    );
};

export default ImageGallery;
