import React from 'react'
import photo from '../assets/passport allan.jpg'
import ContactForm from '../components/ContactForm'
import ThemeToggle from '../components/ThemeToggle'

function About () {
  return (
    <div className='container'>
      <ThemeToggle />
      <section className='about-section'>
        <img
          src={photo}
          alt='Allan Mwangi'
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid var(--accent)',
            marginTop: '1rem'
          }}
        />
        <br />
        <h4>
          <em>Who am I?</em>
        </h4>

        <div className='about' id='about'>
          <p>
            I’m <strong>Allan Mwangi</strong>, a{' '}
            <strong>Full-Stack Developer</strong> and{' '}
            <strong>AI/ML enthusiast</strong> with a passion for building
            data-driven solutions. Certified by <strong>IBM (Coursera)</strong>{' '}
            and <strong>Kaggle</strong>, I specialize in{' '}
            <strong>
              Python, JavaScript (React/Node.js), and cloud technologies
            </strong>
            , with hands-on experience in developing scalable web apps and
            deploying machine learning models.
          </p>

          <h3>My Journey</h3>
          <p>
            My tech journey began with mastering <strong>Python and SQL</strong>{' '}
            through Kaggle, followed by formal training in{' '}
            <strong>
              full-stack development (JavaScript, React, Node.js, FastAPI)
            </strong>{' '}
            and <strong>cloud security</strong> via IBM. These skills enabled me
            to collaborate effectively in agile teams while staying ahead of
            industry trends. Today, I combine my{' '}
            <strong>software engineering expertise</strong> with a growing focus
            on <strong>AI/ML applications</strong>, particularly in healthcare,
            finance, and aviation.
          </p>

          <h3>What Drives Me</h3>
          <p>
            I thrive in dynamic environments—whether it’s debugging late-night
            code or optimizing APIs. Outside work, I’m a{' '}
            <strong>lifelong learner</strong>: diving into documentation,
            solving problems on <strong>HackerRank</strong>, and contributing to
            open-source projects. My discipline extends to physical fitness,
            which fuels my productivity and adaptability in remote/hybrid
            settings.
          </p>

          <h3>Why Work With Me?</h3>
          <p>
            I bring:
            <ul>
              <li>
                <strong>End-to-end development skills</strong> (frontend to
                deployment).
              </li>
              <li>
                <strong>Data/AI proficiency</strong> (Pandas, Scikit-learn).
              </li>
              <li>
                <strong>Collaborative mindset</strong> (Git/GitHub, Agile
                methodologies).
              </li>
              <li>
                <strong>Problem-solving focus</strong>—I build solutions, not
                just code.
              </li>
            </ul>
            Let’s connect if you’re looking for a developer who bridges{' '}
            <strong>technical execution</strong> with{' '}
            <strong>innovative thinking</strong>. I’m excited to contribute
          </p>
          <h4>
            <b>
              * Check out my Github * -{' '}
              <a
                href='https://github.com/allanhue'
                style={{ color: 'rgb(247, 10, 10)' }}
              >
                ALLANHUE
              </a>
            </b>
          </h4>
        </div>
      </section>
      <section className='contact-section'>
        <h3>Contact Me</h3>
        <ContactForm />
      </section>

      <section className='social-media'>
        <h3>Connect with me</h3>
        <a href='https://www.linkedin.com/in/allan-mwangi-626902302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
          <i className='fa-brands fa-linkedin fa-3x'></i>
        </a>
        <a href='https://github.com/allanhue'>
          <i className='fa-brands fa-github fa-3x'></i>
        </a>
      </section>
    </div>
  )
}

export default About
