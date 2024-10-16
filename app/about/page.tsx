'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../custom.css';  
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; // Import the Footer component

const AboutPage = () => {
  const [isCertificateVisible, setCertificateVisible] = useState(false);

  const toggleCertificate = () => {
    setCertificateVisible(!isCertificateVisible);
  };

  return (
    <div className="about-page">
      {/* Navbar */}
      <Navbar /> {/* Add the Navbar here */}

      {/* Left Section: About Me */}
      <div className="about-me">
        <h1 className="about-title">ABOUT ME:</h1>
        
        <section className="about-content">
          <h2 className="section-title">INTRODUCTION:</h2>
          <p className="section-paragraph">
            “Hi, I’m Muskan Nisar, a passionate and driven front-end developer and certified IT support specialist. I love building dynamic and user-friendly websites, combining creativity with technical expertise to create seamless online experiences.”
          </p>

          <h2 className="section-title">MY JOURNEY:</h2>
          <p className='section-paragraph'>
            “I began my journey in tech with a curiosity for how things work behind the scenes, which quickly grew into a passion for web development and automation. Over the past year, I’ve been on an exciting learning path, mastering new technologies and continuously pushing my boundaries.”
          </p>

          <h2 className="section-title">EDUCATION:</h2>
          <p className="section-paragraph">
            “I completed my Matric in Computer Science in May 2023, and I’m currently in the second year of my Intermediate studies. As part of my growth, I’m learning a wide array of technologies, including TypeScript, JavaScript, Python, HTML, CSS, Next.js, Node.js, and Tailwind CSS.”
          </p>

          <h2 className="section-title">FRONT-END DEVELOPMENT:</h2>
          <p className="section-paragraph">
            “My front-end development journey began with a focus on creating intuitive, user-friendly websites. I’ve built projects using Next.js, Tailwind CSS, and TypeScript, which has given me hands-on experience in building responsive, interactive web applications. Through platforms like GitHub and live projects, I’ve honed my skills and am now working towards becoming a Generative AI Engineer.”
          </p>

          {/* Certifications Section */}
          <h2 className="section-title">CERTIFICATIONS:</h2>
          <p className="section-paragraph">
            “I’m proud to be certified in Google IT Automation with Python, a course that strengthened my foundation in:
          </p>
          <ul className="certification-list">
            <li>Python programming for automation.</li>
            <li>IT support processes and troubleshooting.</li>
            <li>Version control with Git.</li>
          </ul>
          <p className='section-light'>This certification has enabled me to automate repetitive tasks, optimize workflows, and troubleshoot IT issues efficiently.”
          </p>
          
          {/* Button to Show Certificate */}
          <button 
            onClick={toggleCertificate} 
            className="toggle-button">
            {isCertificateVisible ? 'Hide Certificate' : 'View Certificate'}
          </button>

          {/* Certificate Display */}
          {isCertificateVisible && (
            <div className="certificate-display">
              <h3 className="certificate-title">Certificate:</h3>
              <Image 
                src="/images/it.jpg" // Update with your certificate image path
                alt="Google IT Automation Certificate"
                className="certificate-image"
                width={600}
                height={400}
              />
            </div>
          )}
        </section>
      </div>

      {/* Right Section: Your Picture */}
      <div className="profile-picture">
        <Image
          src="/images/girl.jpeg" // Update with your image path
          alt="Muskan Nisar"
          className="rounded-full"
          width={400}
          height={400}
        />
      </div>

      {/* Footer */}
      <Footer /> {/* Add the Footer here */}
    </div>
  );
};

export default AboutPage;
