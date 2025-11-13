import React from 'react';
import '../css/style.css';

function Projects() {
  const projects = [
    {
      title: "Financial Fraud Detection",
      description: "Kaggle competition project using Python to identify money laundering patterns in 50k+ transaction records. Achieved 92% accuracy with Random Forest model.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Numpy", "Data Visualization"],
      githubLink: "https://github.com/allanhue/data-vizualisation",
      liveLink: "https://www.kaggle.com/datasets",
      status: "Completed"
    },
    {
      title: "Saas Product Featuring Crm and Transaction Management",
      description: "A comprehensive SaaS platform integrating CRM and transaction management functionalities using fast api(python)  and react javascript frontend for automation.",
      technologies: ["Python", "Supabase", "JavaScript", "PostgreSQL"],
      // githubLink: "https://github.com/allanhue/data-vizualisation",
      // liveLink: "https://saasllanstarfin.onrender.com/",
      status: "In Development"
    },
    {
      title: "Developer Portfolio Website",
      description: "A dynamic showcase of my full-stack capabilities, built with React and modern CSS. Features responsive design, project case studies, and dark/light theme toggle.",
      technologies: ["React", "Tailwindcss", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/allanhue/LatestportfolioBennie",
      liveLink: "#",
      status: "Live"
    },
  ];

  return (
    <div className='container'>
      <h1 className='section-title'>Project Portfolio</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', textAlign: 'center' }}>
        A showcase of my development projects, from web applications to data science solutions.
      </p>
      
      <div className='skills-grid'>
        {projects.map((project, index) => (
          <div key={index} className='card animate-fade-in' style={{ animationDelay: `${index * 0.1}s` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h2 style={{ color: 'var(--accent)', fontSize: '1.4rem', margin: 0 }}>{project.title}</h2>
              <span 
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  backgroundColor: project.status === 'Live' ? 'var(--accent)' : 
                                 project.status === 'Completed' ? '#28a745' : '#ffc107',
                  color: project.status === 'In Development' ? 'var(--background)' : 'var(--background)'
                }}
              >
                {project.status}
              </span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {project.description}
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Technologies:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    style={{
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'var(--background)',
                      color: 'var(--accent)',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--accent)',
                  color: 'var(--background)',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  flex: 1,
                  textAlign: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(100, 255, 218, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                View Code
              </a>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '2px solid var(--accent)',
                  color: 'var(--accent)',
                  backgroundColor: 'transparent',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  flex: 1,
                  textAlign: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--accent)';
                  e.target.style.color = 'var(--background)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--accent)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;