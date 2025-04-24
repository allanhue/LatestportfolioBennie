import React from "react";
import "../css/style.css";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import photo from "../assets/passport allan.jpg";

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
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <div className="hero-section">
        <div className="content">
          <h1>Hi, I'm Allan</h1>
          <h2>Software Developer & Zoho Developer at Redian Softwares</h2>
          <p>
            Specializing in creating dynamic software solutions and Zoho implementations.
            Passionate about developing impactful software solutions.
          </p>
          <div className="stats-grid">
            <div>
              <h2><Num n={1} /></h2>
              <p>Experience</p>
            </div>
            <div>
              <h2><Num n={3} /></h2>
              <p>Projects</p>
            </div>
            <div>
              <h2><Num n={7} /></h2>
              <p>Certifications</p>
            </div>
            <div>
              <h2><Num n={4} /></h2>
              <p>Languages</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img 
            src={photo} 
            alt="Allan Mwangi"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "4px solid var(--accent)"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
