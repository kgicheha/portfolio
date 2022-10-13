import "../App.css";
import About from "./About";
import NavBar from "./NavBar";
import { CssBaseline } from "@mui/material";
import Projects from "./Projects";
import Education from "./Education";
import Blog from "./Blog";
import ContactMe from "./ContactMe";
import WorkExperience from "./WorkExperience";

function App() {

  // need to implement routes
  return (
    <>
      <div id="entirePage">
        <CssBaseline />
        <NavBar />
        <About />
        <Education />
        <Projects />
        <Blog />
        <WorkExperience />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
