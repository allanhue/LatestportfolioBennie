import React from 'react';
import '../css/style.css';
import { FaBrain, FaDatabase, FaCode, FaChartLine, FaFlask } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Interests = () => {
  const interests = [
      {
        title: "Feature Engineering",
        icon: FaChartLine,
        description: "Specializing in feature engineering - on art  of transforming raw data into meaningful features that improve model performance. This is my primary area am developing into  where I combine domain knowledge with statistical techniques to create powerful predictive features.",
      focus: "Feature Selection, Transformation, Domain-Specific Features",
      status: "Specialization Focus",
      color: "#3b82f6"
    },
    {
      title: "Data Science",
      icon: FaDatabase,
      description: "Experienced in data analysis, visualization and predictive modeling. Successfully completed Kaggle projects including financial fraud detection achieving 92% accuracy. Passionate about extracting meaningful insights from complex datasets.",
      focus: "Data Analysis, Predictive Modeling, Data Visualization",
      status: "Active",
       color: "#10b981",
      link: "https://www.kaggle.com/allanyengsnxmwas",
      linkText: "View Kaggle Profile"
    },
    {
      title: "AI Engineering",
      icon: FaBrain,
      description: "Passionate about building intelligent systems and leveraging artificial intelligence to solve real-world problems. Continuously learning advanced AI techniques and staying updated with the latest developments in machine learning, deep learning and neural networks.",
      focus: "Deep Learning, Neural Networks, Model Optimization",
      status: "Active Learning",
      color: "#ff5555"
    },
    // {
        //   title: "Algorithm Optimization",
        //   icon: FaCode,
        //   description: "Continuously improving problem-solving skills through LeetCode challenges. Focused on understanding algorithmic complexity, optimizing solutions, and mastering data structures. This practice enhances my ability to write efficient code for data science and AI applications.",
    //   focus: "Data Structures, Algorithm Complexity, Problem Solving",
    //   status: "Active Practice",
    //   color: "#f59e0b",
    //   link: "https://leetcode.com/",
    //   linkText: "View LeetCode Profile"
    // }
  ];

  const learningGoals = [
    "Advanced feature engineering techniques for high-dimensional data",
    "Deep learning architectures for tabular data",
    "Model interpretability and explainability",
    "Production deployment of ML models",
    // "MLOps and model monitoring",
    "Advanced statistics and probability theory"
  ];

  return (
    <div className='container'>
      <h1 className='section-title'>Interests</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', textAlign: 'center' }}>
        My journey spans Software Engineering, Data Science and AI Engineering, driven by continuous learning and innovation. I am continuously building expertise in feature engineering while expanding my knowledge across the ML/AI spectrum.
      </p>
      
      <div className='skills-grid' style={{ marginBottom: '3rem' }}>
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <div 
              key={index} 
              className='card animate-fade-in' 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                // borderLeft: `4px solid ${interest.color}`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      backgroundColor: `${interest.color}20`,
                      color: interest.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}
                  >
                    <Icon />
                  </div>
                  <h2 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', margin: 0 }}>
                    {interest.title}
                  </h2>
                </div>
                <span 
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    backgroundColor: interest.status === 'Active' || interest.status === 'Active Learning' ? '#10b981' : 
                                   interest.status === 'Specialization Focus' ? 'var(--accent)' : '#f59e0b',
                    color: 'var(--background)'
                  }}
                >
                  {interest.status}
                </span>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {interest.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Focus Areas:
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {interest.focus}
                </p>
              </div>
              
              {interest.link && (
                <a
                  href={interest.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: interest.color,
                    color: 'var(--background)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = `0 4px 12px ${interest.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {interest.linkText} <HiOutlineExternalLink />
                </a>
              )}
            </div>
          );
        })}
      </div>

      <div className='card' style={{ marginTop: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <FaFlask style={{ fontSize: '2rem', color: 'var(--accent)' }} />
          <h2 style={{ color: 'var(--accent)', fontSize: '1.5rem', margin: 0 }}>
            Current Learning Goals
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {learningGoals.map((goal, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: 'var(--background)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div 
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  marginTop: '0.5rem',
                  flexShrink: 0
                }}
              />
              <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {goal}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='card' style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
          <strong style={{ color: 'var(--accent)' }}>Current Focus:</strong> Diving deep into feature engineering techniques, 
          applying them to real-world Kaggle competitions and continuously improving algorithmic problem-solving skills through LeetCode and hackerrank problems.
        </p>
      </div>
    </div>
  );
}

export default Interests;