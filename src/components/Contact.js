import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <strong>Name:</strong> Aravind Krishna B
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> +91 9840698896
        </div>
        <div className="contact-item">
          <strong>Email:</strong> aravindkrish658@gmail.com
        </div>
        <div className="contact-item">
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/aravind-krishna-294742257/" target="_blank" rel="noopener noreferrer">
            Aravindkrishna
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
