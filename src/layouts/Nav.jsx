import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import { FaHome } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle";

function Nav() {
  const [open, setOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (open && !e.target.closest('.nav-container')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [open]);

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-logo">
          {/* implement a home logo  from react-icons*/}
              <FaHome size={35} />
          </Link>
        </li>
        <li className="hamburger" onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}>
          <span>☰</span>
        </li>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
        
          <li>
            <Link to="/experience" className="nav-link" onClick={() => setOpen(false)}>
              Experience
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

            <li>
            <Link to="/education" className="nav-link" onClick={() => setOpen(false)}>
              Education
            </Link>
          </li>
          <li className="theme-toggle-nav">
            <ThemeToggle />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
