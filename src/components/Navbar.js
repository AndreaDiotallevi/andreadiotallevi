import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="navbar-title">Andrea Diotallevi</h1>
        </div>
        <div className="navbar-right">
          <a
            href="https://medium.com/@andreadiotallevi"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-anchor"
          >
            Blog
          </a>
          <Link to="/" className="navbar-link">
            <p>Work</p>
          </Link>
          <Link to="/contact" className="navbar-link">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
