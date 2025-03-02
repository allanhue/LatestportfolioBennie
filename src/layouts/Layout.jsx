import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
