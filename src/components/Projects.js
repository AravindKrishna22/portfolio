import React from "react";
import "../styles/Projects.css";
import uiux1 from "../img/UI1.mp4";
import uiux2 from "../img/UI2.mp4";

const projects = [
  {
    title: "Benz Website Redesign",
    type: "video",
    src: uiux1,
    prototypeLink: "https://www.figma.com/proto/p8jr6qdaPbvzhxDeCogR8f/BENZ-WEBSITE-REDESIGN?page-id=0%3A1&node-id=119-24&starting-point-node-id=5%3A10&t=KZklrFIfqaokCOI7-1",
  },
  {
    title: "Freelance Go-Kart Website",
    type: "video",
    src: uiux2,
    prototypeLink: "https://www.figma.com/proto/hdWamWMZ3krsCko5YuBmqQ/Untitled?page-id=0%3A1&node-id=3-4&p=f&viewport=464%2C263%2C0.04&t=EGHgZM4f3YnBhUvB-1&scaling=scale-down&content-scaling=fixed",
  },
  {
    title: "Travel Website",
    type: "text",
    description: "Developed the frontend for a gamified travel website with React Js in my own ideation. Implemented interactive features and responsive design to enhance user experience.",
    prototypeLink: "https://example.com/travel-prototype",
  },
  {
    title: "Person Recognition",
    type: "text",
    description: "Developed Face recognition model with Deep learning principle which helps to recognize people based on the input given by the user.",
    prototypeLink: "https://example.com/person-recognition-prototype",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-box" onClick={() => window.open(project.prototypeLink, "_blank")}> 
            <h3 className="clickable-title">{project.title}</h3>
            {project.type === "video" ? (
              <video src={project.src} autoPlay loop muted playsInline className="clickable-video" />
            ) : (
              <p className="project-description">{project.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
