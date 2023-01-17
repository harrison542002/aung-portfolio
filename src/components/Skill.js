import React from "react";
import { motion } from "framer-motion";

function Skill({ percentage, skill, animation }) {
  return (
    <motion.div animate={animation} className="p-5">
      <div
        className={`gradient-border border-4
      w-24 h-24 rounded-lg flex justify-center pt-7`}
      >
        <h1 className="text-2xl">{percentage} %</h1>
      </div>
      <h1 className="mt-3 text-center">{skill}</h1>
    </motion.div>
  );
}

export default Skill;
