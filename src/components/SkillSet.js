import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skill from "./Skill";
import "react-circular-progressbar/dist/styles.css";

function SkillSet() {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          delay: 0.3,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        transition: {
          duration: 1,
          type: "spring",
          delay: 0.3,
          bounce: 0.2,
        },
        y: "200%",
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <div className="bg-black pb-8 pt-28 lg:pt-0" ref={ref} id="skills">
      <h1 className="text-center text-white text-2xl pb-2 lg:pb-5 lg:pt-28 lg:text-5xl">
        Skill Set Hightlights
      </h1>
      <div className="flex justify-center">
        <div className="border-t-4 border-white border w-96"></div>
      </div>
      <div className="lg:flex justify-center text-white">
        <div className="grid grid-cols-3">
          <Skill percentage="90" skill="Spring Boot" animation={animation} />
          <Skill percentage="85" skill="NodeJS" animation={animation} />
          <Skill percentage="85" skill="Angular" animation={animation} />
          <Skill percentage="85" skill="React" animation={animation} />
          <Skill percentage="80" skill="Mongo DB" animation={animation} />
          <Skill percentage="80" skill="MySQL" animation={animation} />
        </div>
      </div>
      <div>
        <div className="flex justify-center lg:space-x-8 space-x-3">
          <a href="https://www.java.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="java"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://spring.io/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
              alt="spring"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
