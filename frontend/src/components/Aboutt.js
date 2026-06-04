import React from "react";
import "./Aboutt.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About NebulaCode</h1>
        <p className="about-description">
          NebulaCode is a real-time collaborative code editor designed for aspiring developers, teams, and educators. 
          Our platform allows users to create, share, and collaborate on code seamlessly, making it the perfect tool 
          for pair programming, coding interviews, and team projects.
        </p>
        <h2 className="about-subtitle">Features</h2>
        <ul className="about-features">
          <li>👩‍💻 Real-time collaboration with multiple users.</li>
          <li>📂 Create and manage repositories for your projects.</li>
          <li>🔒 Secure rooms with password protection.</li>
          <li>🧠 AI assistance for code suggestions and debugging.</li>
          <li>🌐 Support for multiple programming languages.</li>
        </ul>
        <h2 className="about-subtitle">Project Info</h2>
        <p className="about-description">
          NebulaCode is a modern collaborative development workspace utilizing React, Express, Monaco Editor, Socket.io, and Yjs CRDTs for real-time document synchronization.
        </p>
      </div>
    </div>
  );
};

export default About;
