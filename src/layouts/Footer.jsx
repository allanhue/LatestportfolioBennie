import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">

            {/* increase size of the icons and padding */}

            <a href="https://github.com/allanhue" className="hover:text-gray-800 transition-colors duration-300"> 
              <FaGithub size={34} style={{ padding: '10px' }} className="hover:scale-110 transition-transform duration-300" /> 

            </a> 
            <a href="https://www.linkedin.com/in/allan-mwangi-626902302/" className="hover:text-gray-600 transition-colors duration-300"> 
              <FaLinkedin size={34} style={{ padding: '10px' }} className="hover:scale-110 transition-transform duration-300" /> 
            </a>
            <a href="mailto:allanmwangi329@gmail.com" className="hover:text-gray-600 transition-colors duration-300"> 
              <FaEnvelope size={30} style={{ padding: '10px' }} className="hover:scale-110 transition-transform duration-300" /> 
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
