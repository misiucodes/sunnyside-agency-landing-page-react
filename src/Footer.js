import React from "react";
import logo from "./images/logo-dk.svg";
import "./Footer.css";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Sunnyside logo" 
        className="img-logo"/>
      </div>
      <div className="footer-navbar">
        <ul className="footer-navbar-menu">
          <li className="footer-navbar-item">About</li>
          <li className="footer-navbar-item">Services</li>
          <li className="footer-navbar-item">Projects</li>
        </ul>
      </div>
      <div className="footer-socials">
        <span className="social-item">
          <button className="social-icon">
            <img src={facebook} alt="facebook icon" className="icon-socials"/>
          </button>
        </span>
        <span className="social-item">
          <button className="social-icon">
            <img src={instagram} alt="instagram icon" className="icon-socials"/>
          </button>
        </span>
        <span className="social-item">
          <button className="social-icon">
            <img src={twitter} alt="twitter icon" className="icon-socials"/>
          </button>
        </span>
        <span className="social-item">
          <button className="social-icon">
            <img src={pinterest} alt="pinterest icon" className="icon-socials"/>
          </button>
        </span>
      </div>
      <span className="attribution">
        Challenge by <strong className="attribution-style">Frontend Mentor. </strong>Coded by <strong className="attribution-style">Michelle.</strong>
      </span>
    </footer>
  );
}

export default Footer;