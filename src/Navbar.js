import React from "react";
import "./Navbar.css";
import logo from "./images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar-top">
      <img className="navbar-logo" src={logo} width="124" alt="sunnyside-logo" />
      <ul className="navbar-top-menu">
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