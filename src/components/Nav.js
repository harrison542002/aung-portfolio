import React, { useRef, useEffect, useState } from "react";
import Logo from "../assets/aungLogo.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const divRef = useRef(null);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  function handleClick() {
    if (divRef.current.classList.contains("hidden")) {
      setShow(true);
      divRef.current.className = divRef.current.className.replace("hidden", "");
    } else {
      setShow(false);
      divRef.current.className += " hidden";
    }
  }

  return (
    <div
      className="bg-black sticky top-0 z-20 backdrop-filter backdrop-blur-lg  text-lg
    bg-opacity-90"
    >
      <div
        className="backdrop-filter back drop-blur-lg bg-opacity-50
 firefox:bg-opacity-50 text-lg lg:flex justify-between px-5"
      >
        <div className="flex justify-between">
          <div className="logo">
            <img src={Logo} alt="aung thiha tun" className="lg:w-20 w-14" />
          </div>
          <div
            className="text-white lg:hidden p-3 lg:p-5 lg:text-4xl"
            onClick={() => handleClick()}
          >
            {show ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
        <div className="text-white p-5 hidden lg:block" ref={divRef}>
          <div ref={ref} className="lg:space-x-5 lg:flex">
            <motion.div animate={animation} className="lg:p-0 p-5">
              <a
                href="#intro"
                className="hover:text-gray-300"
                onClick={() => handleClick()}
              >
                About Me
              </a>
            </motion.div>
            <motion.div animate={animation} className="lg:p-0 p-5">
              <a
                href="#skills"
                className="hover:text-gray-300"
                onClick={() => handleClick()}
              >
                Skills
              </a>
            </motion.div>
            <motion.div animate={animation} className="lg:p-0 p-5">
              <a
                href="#projectEx"
                className="hover:text-gray-300"
                onClick={() => handleClick()}
              >
                Project Experiences
              </a>
            </motion.div>
            <motion.div animate={animation} className="lg:p-0 p-5">
              <a
                href="#lang"
                className="hover:text-gray-300"
                onClick={() => handleClick()}
              >
                Languages
              </a>
            </motion.div>
            <motion.div animate={animation} className="lg:p-0 p-5">
              <a
                href="#contact"
                className="hover:text-gray-300"
                onClick={() => handleClick()}
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
