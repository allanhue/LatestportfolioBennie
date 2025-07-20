import React from 'react'
import '../css/style.css'

const Exp = () => {
  return (
    <div className='container'>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}></h1>
      <div className='container'>
        <div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div>
              <h2
                style={{
                  border: '3px solid var(--border-color)',
                  display: 'inline-block',
                  padding: '1rem'
                }}
              >
                2024
              </h2>
              <h2>IBM Coursera</h2>
              <p>
                I hold a{' '}
                <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
                  Full-Stack Software Developer Certificate
                </span>{' '}
                from IBM (Coursera), where I mastered end-to-end development and
                deployed real-world projects like an{' '}
                <strong>e-commerce platform</strong> using React, Node.js, and
                PostgreSQL. This training equipped me to deliver client
                solutions professionally, including freelance work on{' '}
                <strong>Fiverr</strong> and <strong>Upwork</strong> where I
                handled full project lifecycles—from UI design to cloud
                deployment on Netlify.
              </p>

              <p>
                My journey has been defined by{' '}
                <strong>continuous growth</strong>: daily coding challenges on
                HackerRank, peer mentorship, and leveraging{' '}
                <strong>Git/GitHub</strong> for collaborative and
                version-controlled development. Today, I’m channeling this
                discipline into <strong>AI/ML research</strong>, applying tools
                like Tensor Flow and Python to build predictive models—blending
                my full-stack expertise with a passion for intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
