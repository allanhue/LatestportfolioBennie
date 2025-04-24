import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

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
