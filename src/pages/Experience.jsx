import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='container'>
      <h2 className='section-title'>Experience</h2>

      <div className='experience-item'>
        <h3>Software Developer (Zoho Specialist)</h3>
        <p className='text-accent'>Redian Softwares | 2025 - Present</p>
        <ul className='list-disc ml-4'>
          <li>
            Design and deploy <strong>custom Zoho solutions</strong> using
            Catalyst
          </li>
          <li>
            Integrate Zoho CRM/Creator with <strong>third-party APIs</strong>{' '}
            (Payment gateways,  Google Workspace), improving data
            synchronization
          </li>
          <li>
            Associate with <strong>cross-functional teams</strong> in Agile projects,
            delivering  applications on schedule
          </li>
          <li>
            Optimize code quality through <strong>peer reviews</strong> and
            CI/CD best practices (GitHub Actions)
          </li>
          <li>
            Develop <strong>RESTful APIs</strong> for Zoho extensions, improving
            client reporting capabilities
          </li>
        </ul>
      </div>

      <div className='experience-item'>
        <h3>Freelance Full-Stack Developer</h3>
        <p className='text-accent'>Fiverr & Upwork | Aug 2024 - Present</p>
        <ul className='list-disc ml-4'>
          <li>
            Built <strong>3 web apps</strong> (React/Node.js) with 95% client
            satisfaction, including an e-commerce platform with  faster peak loads
          </li>
          <li>
              Increase code efficiency through{' '}
            <strong>AI-assisted optimization</strong> (GitHub Copilot, ChatGPT
            for debugging)
          </li>
          <li>
            Implemented <strong>responsive designs</strong> (Tailwind CSS) that
            improved mobile conversion and user experience
          </li>
          <li>
            Automated client workflows via{' '}
            <strong>custom API integrations</strong> (Daraja Api, Firebase)
          </li>
          <li>
            Maintained <strong>100% project delivery rate</strong> using
            Git/GitHub for version control
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Experience
