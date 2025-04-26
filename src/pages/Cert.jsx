import React from 'react';

function Cert() {
  return (
    <div className="container">
      
      <div className="intro-section card">
        <p className="text-lg mb-4">
          Aspiring Machine Learning Engineer with a focus on healthcare and aviation sectors.
        </p>
      </div>

      <div className="skills-grid">
        <div className="card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            {/* <li>Java intermediate</li> */}
            <li>SQL (Postgres)</li>
          </ul>
        </div>

        <div className="card">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>React</li>
            <li>Tailwind Css</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Zoho Suite ERP</li>
          </ul>
        </div>

        <div className="card">
          <h3>Additional Skills</h3>
          <ul>
            <li>Cloud Computing</li>
            <li>Git/GitHub</li>
            <li>Data Analysis</li>
            <li> Collaboratiqn </li>
                 
                  </ul>
                
        </div>
      </div>
    </div>
  );
}

export default Cert;
