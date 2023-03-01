import React from "react";
import Project from "./Project";
import KN from "../assets/knshowcase.png";
import CarSale from "../assets/car sale.png";
import KNBK from "../assets/kn bk.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import JobPortal from "../assets/jobportal.png";
import JobUI from "../assets/jobhome.png";

function ProjectExperiments() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 2, delay: 0.2, type: "spring", bounce: 0.2 },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div className="bg-black text-white pt-14 lg:pt-20" id="projectEx">
      <h1 className="text-center text-white text-2xl lg:text-5xl pb-2 lg:pb-5">
        Project Experiences
      </h1>
      <div className="flex justify-center">
        <div className="border-t-4 border-white border lg:w-96 w-72"></div>
      </div>
      <div className="px-10 py-4" ref={ref}>
        <Project
          animate={animation}
          img={KN}
          skills="React, Axios, Tailwind CSS"
          title="KN Project (User Interface)"
          demo="https://harrison542002.github.io/know-your-neighborhood-ui-react/"
          source="https://github.com/harrison542002/know-your-neighborhood-ui-react"
          explain="This project is demonstrated how frontend is connected with backend. Authentication for OAuth2 and Login will be responsible from backend."
        />
        <Project
          animate={animation}
          img={JobPortal}
          skills="Spring MVC, STOMP WebSocket, Bootstrap, JavaScript"
          title="Job Portal"
          source="https://github.com/harrison542002/JobPortal-spring-project"
          explain="This project allows user to search, apply jobs and message to each other. STOMP which is sub-protocol of Websocket is used in real-time messaging feature."
        />

        <Project
          animate={animation}
          img={KNBK}
          skills="Spring Boot, Spring Security, OAuth2, JWT"
          title="KN Project (Backend API)"
          source="https://github.com/harrison542002/know-your-neighbour-bk/tree/master"
          explain="This partner API demonstrates how user can authenticate based on JWT token-based authentication and with
          OAuth2 servers authentication."
        />
        <Project
          animate={animation}
          img={CarSale}
          skills="Spring Boot, Spring Security, Tailwind CSS, AJAX, JavaScript"
          title="Car Sale Portal"
          source="https://github.com/harrison542002/car-sale-spring-boot"
          explain="A portal for user to post new car for sale and get appointment. Admin panel is included for assign admin authority to user and manage car sale, manage appoinment as well as transaction."
        />
        <Project
          animate={animation}
          img={JobUI}
          skills="Angular, Bootstrap, TypeScript"
          title="Job Portal UI Interface"
          source="https://github.com/harrison542002/job-portal-angular"
          explain="UI Interface with Angular framework where user can login, register and create profile."
        />
      </div>
    </div>
  );
}

export default ProjectExperiments;
