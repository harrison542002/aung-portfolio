import React, { useState } from "react";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  async function submitForm(e) {
    e.preventDefault();
    const webhookUrl =
      "https://hooks.slack.com/services/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";
    if (
      firstName.length <= 0 ||
      lastName.length <= 0 ||
      email.length <= 0 ||
      msg.length <= 0
    ) {
      setError("Please Fill in All Required Data");
      return;
    }
  }

  return (
    <div className="bg-black pt-20 px-10 pb-6" id="contact">
      <h1 className="text-center text-white text-3xl pb-3">
        Let's Keep In Touch
      </h1>
      <div className="flex justify-center">
        <div className="border-t-4 border-white border-double w-72"></div>
      </div>
      <div className="lg:grid grid-cols-2">
        <div className="social px-20">
          <h1 className="text-center text-white text-2xl pt-5 pb-5">
            Reach Me From
          </h1>
          <div className="flex justify-center text-4xl space-x-10">
            <a
              href="https://www.facebook.com/codie54/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
            </a>
            <a
              href="http://linkedin.com/in/aung-thiha-tun-6234a61b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700" />
            </a>
            <a
              href="https://github.com/harrison542002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white" />
            </a>
          </div>
          <div></div>
        </div>
        <div className="connect-form mt-10 lg:mt-0">
          <h1 className="text-center text-white text-2xl py-5 lg:py-10">
            Leave Me A Message
          </h1>
          <form className="px-2">
            {error.length > 0 ? (
              <div className="p-5 text-center">{error}</div>
            ) : (
              <></>
            )}
            <div className="lg:flex lg:space-x-6 mb-4">
              <div>
                {error.length > 0 ? <h1 className="text-pink-700">*</h1> : ""}
                <input
                  type="text"
                  name="firstName"
                  className="w-full border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md
              text-white"
                  placeholder="Enter First Name"
                />
              </div>

              <div>
                {error.length > 0 ? <h1 className="text-pink-700">*</h1> : ""}
                <input
                  type="text"
                  name="lastName"
                  className="w-full border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md
              text-white mt-3 lg:mt-0"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md
              text-white w-full"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div>
              <textarea
                className="text-white border-2 border-pink-700 shadow-md shadow-pink-400 bg-black p-5 rounded-md w-full"
                name="msg"
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
      <h1 className="pt-14 pb-5 text-gray-500 text-center">
        Copyright, All rights deserved by Aung Thiha Tun
      </h1>
    </div>
  );
}

export default Contact;
