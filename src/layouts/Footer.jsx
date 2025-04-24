import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <a href="https://github.com/allanhue" className="hover:text-gray-800 transition-colors duration-300"> 
              <FaGithub size={34} className="hover:scale-110 transition-transform duration-300" /> 
            </a> 
            <a href="https://linkedin.com" className="hover:text-gray-600 transition-colors duration-300"> 
              <FaLinkedin size={34} className="hover:scale-110 transition-transform duration-300" /> 
            </a>
            <a href="mailto:contact@example.com" className="hover:text-gray-600 transition-colors duration-300"> 
              <FaEnvelope size={30} className="hover:scale-110 transition-transform duration-300" /> 
            </a>
            <p>© 2023 Allan Mwangi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
