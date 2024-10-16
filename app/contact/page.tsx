'use client'; 

import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../custom.css'; 

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //  form submission logic here
  };

  return (
    <div className="contact-page">
      <Navbar /> 
      <div className="contact-container">
        <h1 className="contact-title">HIRE ME</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Full Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="contact-input"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            rows={4}
            required
          />
          <button type="submit" className="contact-button">
            Send
          </button>
        </form>

        <div className="social-media">
          <h2 className="follow-title">Follow Me</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/muskan-nisar-3135a42b3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/muskann12" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="contact-info">
          <p>Email: <a href="mailto:nisarmuskan14@gmail.com">nisarmuskan14@gmail.com</a></p>
          <p>Contact: +92 000 000 00</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
