import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../resources/css/Portfolio.css";
import VideoBG from "../assets/dotted.mp4";
import { useInView } from "react-intersection-observer";
import Profile from "../assets/profile.png";

export default function Introduction() {
  const animation = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: { type: "spring", duration: 1, bounce: 0.2 },
      });
    }
    if (!inView) {
      animation.start({
        y: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div className="relative bg-black">
      <video
        src={VideoBG}
        autoPlay
        loop
        muted
        className="h-96 lg:h-full"
      ></video>
      <div className="absolute top-0 w-full">
        <div ref={ref}>
          <motion.div
            animate={animation}
            className="header text-gray-300 lg:mt-32 my-5"
          >
            <h1
              className="text-center text-transparent lg:text-5xl text-2xl
              p-5 lg:p-0
               bg-clip-text bg-gradient-to-r from-red-600 to-blue-700
            h-full"
            >
              Hi, My name is Aung Thiha Tun
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:p-16 p-4">
          <div className="lg:flex justify-end">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 2, type: "spring", bounce: 0.2 }}
            >
              <img
                src={Profile}
                alt="aung thiha tun"
                className="lg:w-64 w-3/4 ml-4"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white lg:p-10 sm:p-4"
          >
            <h1 className="text-xl mb-2">I am in profession as </h1>
            <h1 className="lg:text-3xl text-xl font-bold mb-3">
              Web Developer
            </h1>
            <h1 className="lg:text-3xl text-xl font-bold mb-3">
              Spring Boot Developer
            </h1>
            <h1 className="lg:text-3xl text-xl font-bold mb-3">
              NodeJS Developer
            </h1>
            <h1>Based in Mandalay, Myanmar.</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
