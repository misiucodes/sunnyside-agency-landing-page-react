import React, { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import "./Navbar2.css";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  return (
    <nav className="navbar">
      <img src={logo} alt="Sunnyside logo" className="navbar-logo" onClick={closeMobileMenu}></img>
      <div className="mobile-menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? "navbar-menu-active" : "navbar-menu"}>
        <li className="navbar-item" onClick={closeMobileMenu}>
          About
        </li>
        <li className="navbar-item" onClick={closeMobileMenu}>
          Services
        </li>
        <li className="navbar-item" onClick={closeMobileMenu}>
          Projects
        </li>
        <li className="navbar-item">
          {button ? (
          <a href="/" className="navbar-btn" onClick={closeMobileMenu}>
            CONTACT
          </a>
          ) : (
            <a href="/" className="navbar-btn-mobile" onClick={closeMobileMenu}>
              CONTACT
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;