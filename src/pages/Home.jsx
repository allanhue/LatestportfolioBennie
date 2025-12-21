import React, { useState } from "react";
import "../css/style.css";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import photo from "../assets/passport allan.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaCode, FaRocket, FaCertificate, FaGraduationCap } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link, useNavigate  } from "react-router-dom";

function Num({ n }) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.span>{props.number.to((n) => Math.floor(n))}</animated.span>;
}

function Home() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const skills = ['Python', 'JavaScript', 'R-programming', 'React', 'Zoho Deluge&ERP', 'Postgres', 'Supabase', 'Scikit-learn'];
  const recentProjects = [
    { name: 'E-Commerce Platform', tech: 'React ReactToolkit, Node.js', status: 'Completed' },
    { name: 'Whatsapp Integration', tech: 'Zoho, Rest API, JavaScript, zcql', status: 'In Progress' },
    { name: 'Data Analytics Dashboard', tech: 'Python, Javascript', status: 'Development' }
  ];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="greeting">
              <span className="wave"> 🧑‍💻</span>
              <h1>Hi, I'm <span className="name-highlight">Allan</span></h1>
            </div>
            <h2 className="title">Software Engineer & Zoho Specialist</h2>
            <p className="bio">
              {/* Passionate about creating innovative software solutions and seamless Zoho integrations.  */}
              Currently solving errors 😂 .
            </p>
            
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span>Available for new opportunities</span>
            </div>

            <div className="cta-buttons">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              //add a link to projects 
              onClick={() => navigate('/projects')}
              >
                <FaRocket /> View My Work
              </motion.button>

          
            </div>

            {/* <div className="social-links">
              <a href="https://github.com/allanhue" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/allan-mwangi-626902302/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://mailto:allanmwangi329@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div> */}
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img 
                src={photo} 
                alt="Allan Mwangi"
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { icon: FaGraduationCap, number: 2, label: 'Years Experience', color: '#3b82f6' },
            { icon: FaCode, number: 5, label: 'Projects Completed', color: '#10b981' },
            { icon: FaCertificate, number: 7, label: 'Certifications', color: '#f59e0b' },
            { icon: FaRocket, number: 4, label: 'Technologies', color: '#ef4444' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                className={`stat-card ${hoveredStat === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ y: -5 }}
                style={{ '--accent-color': stat.color }}
              >
                <div className="stat-icon">
                  <Icon />
                </div>
                <div className="stat-number">
                  <Num n={stat.number} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h3>Core Technologies</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill}
              className="skill-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="projects-preview">
        <div className="section-header">
          <h3>Recent Projects</h3>
             <a href="Projects" className="view-all" onClick={() => navigate('/projects')}>
            View All <HiOutlineExternalLink />
          </a>
        </div>
        <div className="projects-grid">
          {recentProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="project-header">
                <h4>{project.name}</h4>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-tech">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="quick-contact">
        <div className="contact-card">
          <motion.a
            href="mailto:"
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaEnvelope /> Email Me
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
