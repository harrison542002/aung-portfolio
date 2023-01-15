import logo from "./logo.svg";
import "./App.css";
import Introduction from "./components/Introduction";
import SkillSet from "./components/SkillSet";
import ProjectExperiments from "./components/ProjectExperiments";
import Language from "./components/Language";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
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
