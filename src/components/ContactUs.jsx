import React from 'react';
import './ContactUs.css';

const ContactUsForm = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-us-form">
        <h2>Contact Us</h2>
        <form
          action="https://formspree.io/f/xdknjdqj"  
          method="POST"
        >
          <div className="form-group1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
