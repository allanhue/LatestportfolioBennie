import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/layout.css';

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Nav />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
