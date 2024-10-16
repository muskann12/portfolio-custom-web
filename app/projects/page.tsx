'use client';
import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import '../custom.css'; 

const projects = [
  {
    title: 'Countdown Timer',
    description: 'A Simple Countdown Timer built with Next.js.',
    link: 'https://github.com/muskann12/countdown-timer.git',
    image: '/images/c.jpg',
  },
  {
    title: 'Butterfly Website',
    description: 'A beautiful website showcasing butterfly species.',
    link: 'https://github.com/muskann12/butter-fly-website.git',
    image: '/images/tiger.png',
  },
  {
    title: 'Number Guessing Game',
    description: 'A Number Guessing Game made with TypeScript.',
    link: 'https://github.com/muskann12/02-Number-Guessing-Game.git',
    image: '/images/ts.png',
  },
];

const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">MY SKILLS</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Navbar /> 
      <h1 className="projects-title">MY PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <Image
              src={project.image}
              alt={project.title}
              className="project-image"
              width={500}
              height={300}
            />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <SkillsSection />
      <Footer /> 
    </div>
  );
};

export default ProjectsPage;
