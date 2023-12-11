/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import h3 from '../images/h3.jpeg'
import h4 from '../images/h4.jpeg'
import h2 from '../images/h2.jpeg'
import h5 from '../images/h5.jpeg'
import h7 from '../images/h7.jpeg'
import h8 from '../images/h8.jpeg'
import h9 from '../images/h9.jpeg'
import h1 from '../images/h1.jpeg'
import h6 from '../images/h6.jpeg'
import h10 from '../images/h10.jpeg'
import h11 from '../images/h11.jpeg'
import Cards from "./Cards";


const ImageGallery = () => {
  const containerRef = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const updateParallaxPosition = () => {
    if (!containerRef.current) return;

    const scrollY = window.scrollY;
    const containerTop = containerRef.current.getBoundingClientRect().top;

    controls1.start({ translateY: (containerTop - scrollY) * 0.4 });
    controls2.start({ translateY: (containerTop - scrollY) * 0.4 });
    controls3.start({ translateY: (containerTop - scrollY) * 0.4 });
    controls4.start({ translateY: (containerTop - scrollY) * 0.4 });

    
  };

  useEffect(() => {
    updateParallaxPosition();

    const handleScroll = () => {
      updateParallaxPosition();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <div className="md:mt-[10vh]">
        <div className="h-[23vh] md:h-[40vh] flex flex-col justify-center bg-custom-blue  dark:bg-slate-900">
         <h1 className="uppercase  dark:text-white z-1 md:mt-[20vh] md:pl-[10vw] text-center md:text-left text-2xl md:text-3xl  "> A One Year of Reflection</h1>
        </div>
    <div
      className="h-[175vh] p-5 [&>*:nth-of-type(1)]:-top-[15%] [&>*:nth-of-type(2)]:-top-[35%] [&>*:nth-of-type(3)]:-top-[35%] [&>*:nth-of-type(4)]:-top-[45%] overflow-hidden bg-[rgb(45, 45, 45)] flex gap-[2vw] box-border bg-custom-blue text-center dark:bg-slate-900 "
      ref={containerRef}
    >
        <div></div>
      {/* Transition1 */}
      <motion.div
        className="w-[25%] relative h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px]"
        animate={controls1}
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h1}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h2}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0 "
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h3}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0 "
          />
        </motion.div>
      </motion.div>

      {/* Transition2 */}
      <motion.div
        className="w-[25%] relative h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px]"
        animate={controls2}
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h4}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h5}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h7}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
      </motion.div>

      {/* Transition3 */}
      <motion.div
        className="w-[25%] relative h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px]"
        animate={controls3}
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h6}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h8}
            alt="shekinah"
            className="rounded-xl object-cover w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden">
          <img
            src={h9}
            alt="shekinah"
            className="rounded-xl object-cover  w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
      </motion.div>

      {/* Transition4 */}
      <motion.div
        className="w-[25%] relative h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px]"
        animate={controls4}
      >
        {/* Image 1 */}
        <motion.div className="w-full h-full  rounded-[1vw] overflow-hidden">
          <img
            src={h10}
            alt="shekinah"
            className="rounded-xl object-cover  w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div className="w-full h-full  rounded-[1vw] overflow-hidden">
          <img
            src={h11}
            alt="shekinah"
            className="rounded-xl object-cover  w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0"
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div className="w-full h-full rounded-[1vw] overflow-hidden top:-[10%]">
          <img
            src={h4}
            alt="shekinah"
            className="rounded-xl object-cover  w-full h-full scale-125 origin-top-left sm:ml-0 sm:mr-0 "
          
          />
        </motion.div>
      
      </motion.div>
    </div>
    
    </div>
    <Cards/>
    </div>

  );
};

export default ImageGallery;
