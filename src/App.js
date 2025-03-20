import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import "./styles/Global.css";

const App = () => {
  return (
    <div className="portfolio">
      <Background />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
