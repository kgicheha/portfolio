import "../App.css";
import About from "./About";
import NavBar from "./NavBar";
import { CssBaseline } from "@mui/material";
import Projects from "./Projects";
import Education from "./Education";
import Blog from "./Blog";
import ContactMe from "./ContactMe";
import WorkExperience from "./WorkExperience";
import { Route, Routes } from "react-router-dom";
function App() {
  // need to implement routes
  return (
    <>
      <div id="entirePage">
        <CssBaseline />
        <NavBar />

        {/* <Routes>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/experience" element={<WorkExperience />}></Route>
          <Route path="/contact" element={<ContactMe />}></Route>
          <Route exact path="/" element={<About />}></Route>
        </Routes> */}
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
