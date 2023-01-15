import logo from "./logo.svg";
import "./App.css";
import Introduction from "./components/Introduction";
import SkillSet from "./components/SkillSet";
import ProjectExperiments from "./components/ProjectExperiments";

function App() {
  return (
    <div className="App">
      <Introduction />
      <SkillSet />
      <ProjectExperiments />
    </div>
  );
}

export default App;
