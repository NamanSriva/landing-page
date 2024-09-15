import React, { useState} from "react";
import "./Header.css";
import Logo from "../assets/landingpage.webp"; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

   return (
    <header className="header">
      <div className="left-header">
        <img src={Logo} alt="Logo" className="header-logo" />
      </div>

      <div className="center-header">
        <h1 className="header-heading">Landing Page</h1>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>

      <ul className={`right-header-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <button>Contact</button>
        </li>
        <li>
          <button>About Us</button>
        </li>
       
      </ul>
    </header>
  );
};

export default Header;
