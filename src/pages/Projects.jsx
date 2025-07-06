import React from 'react';

function Projects() {
  return (
    <div className="container">
      <h1>Project Page</h1>
      <div>
        <div>
          <h2>Portfolio Website</h2>
          <p>A personal site that showcases my skills which supports every work I do and delivering all round development.</p>
          <img src="https://github.com/allanhue/website" alt="Portfolio Website" style={{ width: "100%", borderRadius: "8px" }} />
           <a href="https://github.com/allanhue/LatestportfolioBennie">View on GitHub</a>

        </div>
      
       
        <div>
          <h2>Pet Projects</h2>
          <p>Done some pet projects  on GitHub as study projects on plants making my portfolio showcasing all elements all round .</p>
          <img src="../assets/pet_projects.png" alt="Pet Projects" style={{ width: "100%", borderRadius: "8px" }} />
          {/* link redirect to another window */}
          <a href="https://rianac.netlify.app/" target="_blank" rel="noopener noreferrer">View application</a>
        </div>
        <div>
          <h2>Data Analysis Projects</h2>
          <p>Done some data analysis  and cleaning  datasets projects which build my programming experience with Python when I started early my career . This gave me a chance to know where I stood  on understanding key concepts. One was a sales project, another was a money laundering project. All resources i used kaggle for learning and implementation</p>
          <img src="../assets/data_analysis.png" alt="Data Analysis Projects" style={{ width: "100%", borderRadius: "8px" }} />
          <a href="https://github.com/allanhue/data-vizualisation">View on GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
