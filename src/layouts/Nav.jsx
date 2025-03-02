import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {/* Left Side (Logo) */}
        <li>
          <Link to="/" className="nav-logo">
            Allan.
          </Link>
        </li>
        {/* Hamburger for mobile */}
        <li className="hamburger" onClick={() => setOpen(!open)}>
          <span>☰</span>
        </li>
        {/* Right Side (Navigation Links) */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
        
          <li>
            <Link to="/experience" className="nav-link" onClick={() => setOpen(false)}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="nav-link" onClick={() => setOpen(false)}>
              Certifications
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
