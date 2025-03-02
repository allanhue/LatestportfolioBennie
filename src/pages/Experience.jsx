import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div className="container">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-item">
        <h3>Software Developer</h3>
        <p className="text-accent">Redian Softwares | Current</p>
        <p>Working as a Zoho Developer, creating custom solutions and integrations.</p>
      </div>

      <div className="experience-item">
        <h3>Freelance Frontend/Backend Developer</h3>
        <p className="text-accent">Fiverr | August 2024 - Present</p>
        <ul className="list-disc ml-4">
          <li>95% client satisfaction rate</li>
          <li>30% code efficiency improvement</li>
          <li>Responsive website development</li>
        </ul>
      </div>

      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <h3>IBM Full Stack Software Developer Program</h3>
          <p>August 2024</p>
          <p>Comprehensive training in web development, databases, and cloud computing</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
