import React from 'react';

function Projects() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>Project Portfolio</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Portfolio Website Card */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-3 text-gray-800 dark:text-white'>Developer Portfolio Website</h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              <span className='font-bold'>A dynamic showcase</span> of my full-stack capabilities,
              built with React, Tailwind CSS, and FastAPI. Features responsive
              design, project case studies and integrated code. More in my GitHub link.
            </p>
            <img
              src='https://github.com/allanhue/website'
              alt='Portfolio Website Preview'
              className='w-full h-48 object-cover rounded mb-4'
            />
            <div className='flex space-x-3'>
              <a
                href='https://github.com/allanhue/LatestportfolioBennie'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors'
              >
                <span>View Code</span>
              </a>
              <a
                href='https://yourportfolio-live-url.com'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-md flex items-center transition-colors'
              >
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Cleaning Services App Card */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-3 text-gray-800 dark:text-white'>On-Demand Cleaning Services App</h2>
            <p className='text-gray-600 dark:text-gray-300 mb-2'>
              <span className='font-bold'>A work-in-progress marketplace</span> connecting users
              with local cleaning professionals.
            </p>
            <ul className='list-disc pl-5 mb-3 text-gray-600 dark:text-gray-300 space-y-1'>
              <li>Service selection wizard with dynamic pricing</li>
              <li>User authentication (Firebase Auth)</li>
              <li>Basic booking system prototype</li>
            </ul>
            <p className='italic text-sm text-gray-500 dark:text-gray-400 border-l-4 border-blue-500 pl-3 mb-4'>
              <span className='font-semibold'>Note:</span> Actively developing payment integration and provider dashboards.
            </p>
            <img
              src='../assets/cleaning_app_preview.png'
              alt='Cleaning Services App Preview'
              className='w-full h-48 object-cover rounded mb-4'
            />
            <div className='flex space-x-3'>
              <a
                href='https://rianac.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors'
              >
                <span>View Prototype</span>
              </a>
              <a
                href='https://github.com/your-repo'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-md flex items-center transition-colors'
              >
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Data Analysis Card */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-3 text-gray-800 dark:text-white'>Financial Fraud Detection</h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              <span className='font-bold'>Kaggle competition project</span> using Python to identify
              money laundering patterns in 50k+ transaction records.
              Achieved 92% accuracy with Random Forest model.
            </p>
            <img
              src='../assets/data_analysis.png'
              alt='Data Analysis Dashboard'
              className='w-full h-48 object-cover rounded mb-4'
            />
            <div className='flex space-x-3'>
              <a
                href='https://github.com/allanhue/data-vizualisation'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors'
              >
                <span>View Analysis</span>
              </a>
              <a
                href='https://www.kaggle.com/your-profile'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-md flex items-center transition-colors'
              >
                <span>Kaggle Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;