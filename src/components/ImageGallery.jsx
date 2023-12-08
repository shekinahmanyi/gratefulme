import React from "react";
import sheki from "../images/sheki.jpeg";
import { motion } from "framer-motion";



const ImageGallery = () => {
    
  return (
    <div className="h-[175vh] p-5 [&>*:nth-of-type(1)]:-top-[45%] [&>*:nth-of-type(2)]:-top-[95%] [&>*:nth-of-type(3)]:-top-[45%] [&>*:nth-of-type(4)]:-top-[75%] overflow-hidden bg-[rgb(45, 45, 45)] flex gap-[2vw] box-border bg-custom-blue text-center dark:bg-slate-900 ">
      {/*Transition1 */}
      <motion.div
        className="w-[25%] h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px] "
        initial="hidden"
        whileInView="visible"
        transform="translateY(653.621px) translateZ(0px)"
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0 "
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0 "
          />
        </motion.div>
      </motion.div>

      {/*Transition2 */}
      <motion.div
        className="w-[25%]  h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px] transform: translateY(653.621px) translateZ(0px);"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
      </motion.div>

      {/*Transition3 */}
      <motion.div
        className="w-[25%]  h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px] transform translate-y-36 translate-z-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
      </motion.div>

      {/*Transition4 */}
      <motion.div
        className="w-[25%] h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px] transform translate-y-96 translate-z-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={sheki}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageGallery;
