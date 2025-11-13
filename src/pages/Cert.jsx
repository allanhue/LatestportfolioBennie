import React from 'react'

function Cert () {
  return (
    <div className='container'>
      <div className='intro-section card'>
        <p className='text-lg mb-4'>
          Data Scientist Practitioner | Advancing AI in Healthcare, FinTech 
        </p>
      </div>

      <div className='skills-grid'>
        <div className='card'>
          <h3>Programming & Languages</h3>
          <ul>
            <li>
              <strong>Python</strong> (Pandas, NumPy, RainForest-Regression)
            </li>
            <li>
              <strong>JavaScript</strong> (ES6+, React, Node.js)
            </li>
            <li>
              <strong>SQL</strong> (PostgreSQL, Query Optimization)
            </li>
            <li>
              <strong>Zoho Deluge</strong> (Automation)
            </li>
          </ul>
        </div>

        <div className='card'>
          <h3>Frameworks & Platforms</h3>
          <ul>
            <li>
              <strong>Frontend</strong>: JavaScript, Tailwind CSS
            </li>
            <li>
              <strong>Backend</strong>: Node.js(Express), FastAPI
            </li>
            <li>
              <strong>Zoho Ecosystem</strong>: Zoho Catalyst, Suite ERP
            </li>
            <li>
              <strong>Cloud</strong>: GCP Basics, Deployment
            </li>
          </ul>
        </div>

        <div className='card'>
          <h3>Specializations & Practices</h3>
          <ul>
            <li>
              <strong>Data Science</strong>: Cleaning, Analysis, Visualization
              (Matplotlib, Seaborn)
            </li>
            <li>
              <strong>DevOps</strong>: Git/GitHub, CI/CD Pipelines
            </li>
            <li>
              <strong>AI/ML</strong>: Predictive Modeling, PyTorch, Scikit-learn (Learning)
            </li>
            <li>
              <strong>Soft Skills</strong>: Agile Collaboration, Problem-Solving
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cert
