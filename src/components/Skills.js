import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skillSet = ["React", "JavaScript", "MongoDB", "FIGMA", "Python","SQL"];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skill-list">
        {skillSet.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
