import React from 'react';
import { motion } from 'framer-motion';

const Experience=()=> {
  return (
    <div className="container">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-item">
        <h3>Software Developer</h3>
        <p className="text-accent">Redian Softwares | Currently</p>
        <p>Working as a Zoho Developer, creating custom solutions and integrations.</p>
      </div>

      <div className="experience-item">
        <h3>Freelance Frontend/Backend Developer</h3>
        <p className="text-accent">Fiverr | August 2024 - Present</p>
        <ul className="list-disc ml-4">
          <li>95% client satisfaction rate</li>
          <li>45% code efficiency improvement</li>
          <li>Responsive website development</li>
        </ul>
      </div>
     
        
    </div>
  );
}

export default Experience;
