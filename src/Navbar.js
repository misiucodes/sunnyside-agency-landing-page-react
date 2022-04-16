import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () =>setClick(!click);
  const closeMobileMenu = () => setClick(False);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

   useEffect(() => {
    showButton();
      window.addEventListener("resize", showButton);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar-menu">
      <img className="navbar-logo" src={logo} width="124" alt="sunnyside-logo" />
      <div className="mobile-menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars /> }
      </div>
      <ul className={click ? "nav-menu-active" : "nav-menu"}>
        <li className="navbar-item" onClick={closeMobileMenu}>
          About
        </li>
        <li className="navbar-item" onClick={closeMobileMenu}>
          Services
        </li>
        <li className="navbar-item" onClick={closeMobileMenu}>
          Projects
        </li>
        <li className="navbar-btn">
          {button ? (
            <button className="btn-contact" onClick={closeMobileMenu}>
            <strong>CONTACT</strong>
          </button>
          ) : (
              <button className="btn-contact-mobile" onClick={closeMobileMenu}>
              </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;