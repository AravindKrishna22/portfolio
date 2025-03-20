import React from "react";
import "../styles/About.css";
import aboutImage from "../img/image.jpg"; 

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={aboutImage} alt="About Me" className="about-image" />
        <p>
          I am a <strong>Full Stack Developer</strong> with a deep passion for crafting dynamic and interactive web experiences. 
          I specialize in <strong>Designing and Developing visually stunning interfaces</strong>.
        </p>
      </div>
    </section>
  );
};
export default About;
