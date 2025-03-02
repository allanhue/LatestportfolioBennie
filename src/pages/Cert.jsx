import React from 'react';
import { motion } from 'framer-motion';

function Cert() {
  return (
    <div className="container">
      <h2 className="section-title">Certifications & Skills</h2>
      
      <div className="intro-section card">
        <p className="text-lg mb-4">
          Enthusiastic Frontend and Backend Developer with a solid background in web development.
          Aspiring Machine Learning Engineer with a focus on healthcare and aviation sectors.
        </p>
      </div>

      <div className="skills-grid">
        <div className="card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>SQL (Postgres)</li>
          </ul>
        </div>

        <div className="card">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Zoho</li>
          </ul>
        </div>

        <div className="card">
          <h3>Additional Skills</h3>
          <ul>
            <li>Cloud Computing</li>
            <li>Git/GitHub</li>
            <li>Predictive Modeling</li>
            <li>Data Analysis</li>
            <li> Collaboratiqn </li>
                 
                  </ul>
                
        </div>
      </div>
    </div>
  );
}

export default Cert;
