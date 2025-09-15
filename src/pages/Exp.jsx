import React from 'react'
import '../css/style.css'

const Exp = () => {
  const educationData = [

      {
      year: '2024',
      institution: ' The Open University Of Kenya',
      title: ' BSc. Data Science',
      description: 'Comprehensive program covering statistics, machine learning, data visualization, and big data technologies. Developed skills in Python (Pandas, NumPy), SQL, and data storytelling through projects like customer segmentation and sales forecasting using real-world datasets.',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Science',],
      status: 'In Progress'
    },
    {
      year: '2024',
      institution: 'IBM Coursera',
      title: 'Full-Stack Software Developer Certificate',
      description: 'Mastered end-to-end development and deployed real-world projects like an e-commerce platform using React, Node.js, and PostgreSQL. This training equipped me to deliver client solutions professionally, including freelance work on Fiverr and Upwork where I handled full project lifecycles—from UI design to cloud deployment on Netlify.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Full-Stack Development', 'Cloud Deployment'],
      status: 'Completed'
    },
    {
      year: '2024',
      institution: 'Self-Directed Learning',
      title: 'AI/ML Research & Development',
      description: 'Currently channeling my discipline into AI/ML research, applying tools like TensorFlow and Python to build predictive models—blending my full-stack expertise with a passion for intelligent systems.',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Science', 'Predictive Modeling'],
      status: 'In Progress'
    }
  ];

  const achievements = [
    'Daily coding challenges on HackerRank',
    'Peer mentorship and collaborative development',
    'Git/GitHub for version-controlled development',
    'Professional freelance project delivery',
    'Full project lifecycle management'
  ];

  return (
    <div className='container'>
      <h1 className='section-title'>Education & Learning Journey</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', textAlign: 'center' }}>
        My continuous growth through formal education, self-directed learning, and practical application.
      </p>

      <div className='education-section'>
        {educationData.map((education, index) => (
          <div key={index} className='experience-item card animate-fade-in' style={{ animationDelay: `${index * 0.2}s` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    border: '3px solid var(--accent)',
                    display: 'inline-block',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'var(--background)',
                    color: 'var(--accent)',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}
                >
                  {education.year}
                </div>
                <div>
                  <h2 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.3rem' }}>
                    {education.institution}
                  </h2>
                  <span 
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      backgroundColor: education.status === 'Completed' ? 'var(--accent)' : '#ffc107',
                      color: 'var(--background)',
                      marginTop: '0.5rem',
                      display: 'inline-block'
                    }}
                  >
                    {education.status}
                  </span>
                </div>
              </div>
            </div>
            
            <h3 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '1rem' }}>
              {education.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {education.description}
            </p>
            
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.75rem' }}>Key Skills & Technologies:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {education.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{
                      padding: '0.4rem 0.8rem',
                      backgroundColor: 'var(--card-bg)',
                      color: 'var(--accent)',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      border: '1px solid var(--border-color)',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='card' style={{ marginTop: '3rem' }}>
        <h2 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Continuous Growth Achievements</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: 'var(--background)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
              }}
            >
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  flexShrink: 0
                }}
              />
              <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {achievement}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Exp
