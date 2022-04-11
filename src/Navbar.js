import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <img className="navbar-logo" src="images/logo.svg" width="124" alt="sunnyside-logo" />
      <ul>
        <li className="navbar-item">
          About
        </li>
        <li className="navbar-item">
          Services
        </li>
        <li className="navbar-item">
          Projects
        </li>
        <button className="btn-contact">
          <strong>CONTACT</strong>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;