import "./App.css";
import Introduction from "./components/Introduction";
import { motion } from "framer-motion";
import SkillSet from "./components/SkillSet";
import ProjectExperiments from "./components/ProjectExperiments";
import Language from "./components/Language";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App" id="intro">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 1 } }}
        className="z-50 email align-middle py-5 border-y-2 border-r-2 border-pink-600 text-sm rounded-tr-lg rounded-br-lg"
      >
        <p className="space-x-10 text-lg text-bold text-pink-600">
          aungthiha12345mdy@gmail
        </p>
      </motion.div>
      <Nav />
      <Introduction />
      <SkillSet />
      <ProjectExperiments />
      <Language />
      <Contact />
    </div>
  );
}

export default App;
