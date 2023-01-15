import React from "react";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div className="bg-black pt-20 px-10 pb-6">
      <h1 className="text-center text-white text-2xl pb-3">
        Let's Keep In Touch
      </h1>
      <div className="flex justify-center">
        <div className="border-t-4 border-white border-double w-72"></div>
      </div>
      <div className="lg:grid grid-cols-2">
        <div className="social px-20">
          <h1 className="text-center text-white text-2xl py-10">
            Social Media
          </h1>
          <div className="flex justify-center text-4xl space-x-5">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700" />
            <FontAwesomeIcon icon={faGithub} className="text-white" />
          </div>
          <div></div>
        </div>
        <div className="connect-form mt-10 lg:mt-0">
          <h1 className="text-center text-white text-2xl py-5 lg:py-10">
            Leave Me A Message
          </h1>
          <form className="px-2">
            <div className="lg:flex lg:space-x-6 mb-4">
              <input
                type="text"
                className="w-full border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md
              text-white"
                placeholder="Enter First Name"
              />

              <input
                type="text"
                className="w-full border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md
              text-white mt-3 lg:mt-0"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md
              text-white w-full"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div>
              <textarea
                className="text-white border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md w-full"
                name=""
                id=""
                placeholder="Leave Your Priceless Message 🤗"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                className="p-5 text-white bg-pink-700 mt-3 rounded-md shadow-md shadow-pink-400
              hover:bg-pink-900"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
