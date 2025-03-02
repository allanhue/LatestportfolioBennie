import React from 'react';

function Projects() {
  return (
    <div className="container">
      <h1>Project Page</h1>
      <div>
        <div>
          <h2>Portfolio Website</h2>
          <p>A personal site that showcases my skills which supports every work I do.</p>
          <img src="../assets/portfolio.png" alt="Portfolio Website" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
        <div>
          <h2>E-commerce Site</h2>
          <p>A small product-based e-commerce site with features like product lists, a shopping cart, and checkout making outstanding skills.</p>
          <img src="../assets/ecommerce.png" alt="E-commerce Site" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
        <div>
          <h2>Napier Internationals</h2>
          <p>Made over successful 3 projects, one for a client on e-commerce Napier Internationals which took about 3 months, an end-to-end project using JavaScript to enhance and some Wix features since I had little experience thus improved my knowledge.</p>
          <img src="../assets/napier.png" alt="Napier Internationals" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
        <div>
          <h2>Pet Projects</h2>
          <p>Done some pet projects on e-commerce on GitHub as study projects on plants making my portfolio showcasing all elements.</p>
          <img src="../assets/pet_projects.png" alt="Pet Projects" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
        <div>
          <h2>Data Analysis Projects</h2>
          <p>Done some data analysis projects which build my coding experience with Python when I started. This gave me a chance to know where I should stand on visualizing. One was a sales project, another was a money laundering project.</p>
          <img src="../assets/data_analysis.png" alt="Data Analysis Projects" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
      </div>
    </div>
  )
}

export default Projects;
