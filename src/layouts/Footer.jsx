import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>© 2024 Allan Mwangi. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/allanhue" className="hover:text-gray-600">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-gray-600">LinkedIn</a>
            <a href="mailto:contact@example.com" className="hover:text-gray-600">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
