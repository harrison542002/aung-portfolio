import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../resources/css/Portfolio.css";
import VideoBG from "../assets/dotted.mp4";
import { useInView } from "react-intersection-observer";
import Profile1 from "../assets/me.jpg";

export default function Introduction() {
  const animation = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: { type: "spring", duration: 1, bounce: 0.2, delay: 0.2 },
      });
    }
    if (!inView) {
      animation.start({
        y: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div className="introduction bg-black lg:h-full">
      <video src={VideoBG} autoPlay loop muted></video>
      <div className="absolute top-0 w-full">
        <div ref={ref}>
          <motion.div
            animate={animation}
            className="header text-gray-300 lg:mt-16 my-5"
          >
            <h1
              className="text-center lg:text-5xl text-2xl
              p-3 lg:p-0 font-light drop-shadow-lg mb-3
            h-full"
            >
              Hi, I am <span className="font-extrabold">Aung Thiha Tun</span>
            </h1>
            <div className="py-3 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1Lp9w9YFJ_xlPHfUzzBKJh8FmkQjGw22p/view?usp=sharing"
                className="font-extrabold uppercase p-3 text-white
                hover:bg-pink-700 bg-pink-600 block text-center rounded-lg shadow-md shadow-pink-400
                hover:-translate-y-3 transition-all delay-75 duration-700"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="lg:grid grid-cols-2 lg:p-16 p-4">
          <div className="lg:flex justify-end">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                bounce: 0.2,
                delay: 0.2,
              }}
              className="flex justify-center"
            >
              <img
                src={Profile1}
                alt="aung thiha tun"
                className="lg:w-60 w-48 lg:ml-4 rounded-lg shadow-sm shadow-pink-400
                hover:shadow-pink-500
                hover:-translate-y-5 transition-all duration-700 delay-75"
              />
            </motion.div>
          </div>
          <div className="flex lg:ml-8 justify-center lg:justify-start lg:mt-0 mt-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.2 }}
              className="text-white text-center lg:text-left"
            >
              <h1 className="text-xl mb-2 font-light">I am professional in </h1>
              <h1 className="lg:text-3xl  text-xl font-bold mb-3">
                Web Development
              </h1>
              <h1 className="lg:text-3xl text-xl font-bold mb-3">NodeJS</h1>
              <h1 className="lg:text-3xl text-xl font-bold mb-3">
                Spring Boot and More
              </h1>
              <h1>Lived in Mandalay, Myanmar.</h1>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center bg-pink-600 lg:p-8">
          <div className="text-white text-xl p-8 text-center">
            I have been working and learning on software dev since 2020 and
            created lots of
            <b> personal</b> and <b>academic projects</b> .
            <br />
            As a person, I am <b>optimistic</b>, <b>passionate</b>,
            <b> fast to learn</b> and
            <b> timely on deadline</b>.
          </div>
        </div>
      </div>
    </div>
  );
}
