import React from 'react';
import photo from '../assets/passport allan.jpg';
import ContactForm from '../components/ContactForm';
import ThemeToggle from '../components/ThemeToggle';

function About() {
  return (
    <div className="container">
      <ThemeToggle />
      <section className="about-section">
        <h4>Hi, I'm <h1>Allan Mwangi</h1></h4>
        <h3>Frontend/Backend Python Developer</h3>
        <img 
          src={photo} 
          alt="Allan Mwangi" 
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid var(--accent)",
            marginTop: "1rem"
          }} 
        />
        <br />
        <h4><em>Who am I?</em></h4>
        <div className="about" id="about">
          <p>
            Hi, I am Allan Kaigi Mwangi,  a passionate aspiring full stack software developer with a strong interest in technologies specifically software and data malnipulation. I am a certified frontend developer from IBM Coursera. I have a strong background in programming as I did Python and SQL from Kaggle, later on enrolled for my certificate at IBM where I specialized in some languages: JavaScript, HTML-5, React library, Node js .
            <br /><br />
            I did cloud computing and intro to cloud security which enhanced my frontend development. Having these skills made me able to learn about teamwork and keeping ahead with others on the latest technology in the market. My hands-on skills will surely be a great influence dealing with dynamic tasks on websites and app development also.
            <br /><br />
            I am very flexible on working due to I keep doing physical exercises which makes me work even late schedules. Some of my free time I go through documentations which keep me on track daily. Having a passion for tech, programming is my hobby almost. I hope to work around a great motivated team with a thirst to strive.
            <br /><br />
            Being part of HackerRank has been a significant part of my journey, taking quizzes every day and  finding mentors around me professionally for my growth. Version control with Git and GitHub played a crucial role in all advancements, ensuring I never lost my code during the development process. AI has been transformative and crucial in my daily tasks, especially in my research projects as an aspiring future tech in AI models.
          </p>
        </div>
        <br /><br />
        <section className="pro">
          <div className="projects" id="projects">
            <h3>SKILLS</h3>
            <h2><b>Frontend / Backend skills</b></h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Tailwind CSS</li> <br/>



              <li>Python</li>
              <li>Node js</li>
              <li>SQL/ Postgres</li>
              <li>Deployment Capabilities and Version Control</li>
            </ul>
            <p>
              <br />
              <h4><b>* Check out my Github * - <a href="https://github.com/allanhue" style={{ color: 'rgb(247, 10, 10)' }}>ALLANHUE</a></b></h4>
            </p>
            <br />
          </div>
        </section>
        <section className="contact-section">
          <h3>Contact Me</h3>
          <ContactForm />
        </section>
        <section className="social-media">
        
          <a href="https://www.linkedin.com/in/allan-mwangi-626902302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i className="fa-brands fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/allanhue">
            <i className="fa-brands fa-github fa-3x"></i>
          </a>
        </section>
      </section>
    </div>
  );
}

export default About;
