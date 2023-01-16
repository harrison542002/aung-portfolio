import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../resources/css/Portfolio.css";
import VideoBG from "../assets/dotted.mp4";
import { useInView } from "react-intersection-observer";
import Profile from "../assets/profile.png";
import Profile1 from "../assets/profile1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    <div className="introduction bg-black lg:h-full" id="intro">
      <video src={VideoBG} autoPlay loop muted></video>
      <div className="absolute top-0 w-full">
        <div ref={ref}>
          <motion.div
            animate={animation}
            className="header text-gray-300 lg:mt-16 my-5"
          >
            <h1
              className="text-center text-transparent lg:text-5xl text-2xl
              p-3 lg:p-0
               bg-clip-text bg-gradient-to-r from-red-600 to-blue-700
            h-full"
            >
              Hi, My name is Aung Thiha Tun
            </h1>
            <h1 className="text-center mt-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-lg mr-3" />
              aungthiha12345mdy@gmail.com
            </h1>
          </motion.div>
        </div>

        <div className="lg:grid grid-cols-2 lg:p-16 p-4">
          <div className="lg:flex justify-end">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 2, type: "spring", bounce: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={Profile1}
                alt="aung thiha tun"
                className="lg:w-52 w-48 lg:ml-4 rounded-md border-4"
              />
            </motion.div>
          </div>
          <div className="flex lg:ml-20 justify-center lg:justify-start lg:mt-0 mt-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white text-center lg:text-left"
            >
              <h1 className="text-xl mb-2">I am in profession as </h1>
              <h1 className="lg:text-3xl  text-xl font-bold mb-3">
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
    </div>
  );
}
