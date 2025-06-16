import React from 'react';
import { motion } from 'framer-motion';

const Experience=()=> {
  return (
    <div className="container">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-item">
        <h3>Software Developer</h3>
        <p className="text-accent">Redian Softwares | Currently</p>
        <ul className="list-disc ml-4">
          <li>Developing custom software solutions</li>
          <li>Integrating Zoho applications with third-party services</li>
          <li>Enhancing client workflows with Zoho CRM and Zoho Creator</li>
          <li>Collaborating with cross-functional teams to deliver projects</li>
          <li>Implementing best practices in software development</li>
          <li>Participating in code reviews </li>
          <li>API development and integration testing </li>
        </ul>
      
      </div>

      <div className="experience-item">
        <h3>Freelance Software Developer</h3>
        <p className="text-accent">Fiverr | August 2024 - Present</p>
        <ul className="list-disc ml-4">
          <li>Developed and maintained web applications using React and Node.js</li>
          <li>95% client satisfaction rate</li>
          <li>45% code efficiency improvement</li>
          <li>Responsive website development</li>
          <li>API integration and development</li>
          <li>Version control with Git and GitHub</li>
          <li>Utilizing AI tools for code optimization</li>

        </ul>
      </div>
     
        
    </div>
  );
}

export default Experience;
