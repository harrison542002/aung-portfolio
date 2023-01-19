import React from "react";
import "../resources/css/Portfolio.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ img, title, explain, animate, skills, demo, source }) {
  return (
    <motion.div
      className="rounded-lg project lg:mx-32 p-2 mt-5 hover:shadow-gray-600 hover:shadow-md"
      animate={animate}
    >
      <div className="lg:grid grid-cols-10 bg-black">
        <div className="col-span-4">
          <img src={img} alt={title} className="w-full h-full" />
        </div>
        <div className="col-span-6 p-8">
          <div className="mb-3">
            <h1 className="mb-5 text-xl font-bold ">{title}</h1>
            <p>{explain}</p>
          </div>
          <div className="my-5">
            <h1 className="text-xl font-bold">Skill covered</h1>
            <p>{skills}</p>
          </div>
          <div className="lg:flex">
            <a
              className=" p-3 rounded-lg mr-5
              border-2
            shadow-gray-600 shadow-md 
            hover:hover:bg-pink-600
            flex"
              href={source}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-3xl" />
              <h1 className="text-center p-1">Source Code</h1>
            </a>
            {demo ? (
              <a
                className="hover:bg-pink-600
              border-2 p-3 rounded-lg
            shadow-gray-600 shadow-md flex
            mt-3
            lg:mt-0 lg:w-auto w-1/2"
                href={demo}
                target="_blank"
              >
                <h1 className="p-1">Demo</h1>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
