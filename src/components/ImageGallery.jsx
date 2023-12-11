/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from '@studio-freight/lenis'
import h3 from '../images/h3.jpeg';
import h4 from '../images/h4.jpeg';
import h2 from '../images/h2.jpeg';
import h5 from '../images/h5.jpeg';
import h7 from '../images/h7.jpeg';
import h8 from '../images/h8.jpeg';
import h9 from '../images/h9.jpeg';
import h1 from '../images/h1.jpeg';
import h6 from '../images/h6.jpeg';
import h10 from '../images/h10.jpeg';
import h11 from '../images/h11.jpeg';


const ImageGallery = () => {
 
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    ref: gallery, 
    initial: 0,
    throttle: 50,
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])
  
  return (
   
      <motion.div className="md:mt-[10vh]">
        <motion.div className="h-[23vh] md:h-[40vh] flex flex-col justify-center bg-custom-blue  dark:bg-slate-900">
          <h1 className="uppercase dark:text-white z-1 md:mt-[20vh] md:pl-[10vw] text-center md:text-left text-2xl md:text-3xl"> A One Year of Reflection</h1>
        </motion.div>

        <motion.div className="h-[50vh] bg-custom-blue dark:bg-slate-900"></motion.div>
        <motion.div
          className="h-[175vh] p-5 [&>*:nth-of-type(1)]:-top-[65%] [&>*:nth-of-type(2)]:-top-[95%] [&>*:nth-of-type(3)]:-top-[45%] [&>*:nth-of-type(4)]:-top-[85%] overflow-hidden flex flex-row gap-[2vw] box-border  bg-custom-blue dark:bg-slate-900 "
          ref={gallery}
        >
        
          {/* Transition1 */}
          <motion.div
            className="w-[25%] relative h-full flex flex-col gap-[2vw] min-w-[150px] lg:min-w-[250px]"
            style={{ y: y }}
          >
            {/* Image 1 */}
            <motion.div className="w-full h-full relative rounded-[1vw] overflow-hidden" >
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
            
            style={{ y: y2 }}
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
            style={{ y: y3 }}
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
            style={{ y: y4 }}
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
        </motion.div>
        <motion.div className="h-[100vh] bg-custom-blue  dark:bg-slate-900" ></motion.div>
      </motion.div>
     
  );
};

export default ImageGallery;
