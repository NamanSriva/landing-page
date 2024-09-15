import React from "react";
import "./Footer.css"; 


const Footer = () => {
  return (
    <div className="footer-container-1">
      
      <div className="footer-1">
        <div className="footer-section">
          <h1>Landing Page</h1>
          <p>Reach out to us</p>
          <p className="footer-item">
            <a href="mailto:aryansrivastava.apsgmail.com">aryansrivastava.aps@gmail.com</a>
          </p>
          <p className="footer-item">
            11am to 6pm Mon - Sun
          </p>
        </div>
        <div className="footer-section">
          <h1>SUPPORT</h1>
          <p>
            Privacy policy
          </p>
          <p>
            Return
          </p>
          <p>
            <a href="">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
