import React from 'react';
import './AboutUs.css';
import MissionImage from '../assets/mission.webp';
import VisionImage from '../assets/vision.jpeg';
import ServiceImage from '../assets/services.webp'; 


const AboutUs = () => {
  return (
    <div className="about-container">
      
      
      <main className="section">
        <div className="section-content">
          <h1 className="title">About Us</h1>
          
          <div className='flex-row'>
            <div className="column">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                Our mission at Landing Page is to connect students
                with a diverse team of verified faculty members
                dedicated to providing insightful book reviews...
              </p>
            </div>
            <div className="columnimg">
              <img src={MissionImage} alt="Our Mission" className="section-image" />
            </div>
          </div>
         
          <div className='flex-row'>
          <div className="column">
              <h2 className="section-title">Our Vision</h2>
              <p className="section-text">
                At Landing Page, our vision is to foster a vibrant online community where students have access to comprehensive book reviews...
              </p>
            </div>
            <div className="columnimg">
              <img src={VisionImage} alt="Our Vision" className="section-image" />
            </div>
        
          </div>
          

          <div className="flex-row">
            <div className="column">
              <h2 className="section-title">Our Services</h2>
              <p className="section-text">
                Comprehensive  Reviews: Access detailed reviews covering a wide range of academic subjects...
              </p>
            </div>
            <div className="columnimg">
              <img src={ServiceImage} alt="Our Services" className="section-image" />
            </div>
          </div>

         
          
          </div>
      </main>
      
      
    </div>
  );
};

export default AboutUs;
