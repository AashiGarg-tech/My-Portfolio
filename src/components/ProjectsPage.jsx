// src/pages/ProjectsPage.jsx

import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment processing, and product management.',
    image: 'https://img.intertoons.com/wp-content/uploads/2023/02/7_steps_for_eCommerce_mobile_app_development-1.png',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, notifications, and team collaboration features.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*hI7WGvDexJcZyJrXLjErXw.png',
    liveLink: '#',
    githubLink: '#',
  },
];

function ProjectsPage() {
  return (
    <div className="container mx-auto p-8 pt-16 md:p-16 text-white h-screen">
      {/* <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4">Projects</h1>
      <div className="border-b-2 border-purple-400 w-24 mx-auto mb-16"></div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div> */}
      <h1 className="text-2xl md:text-2xl text-center mb-4">This page is going to update soon</h1>
    </div>
  );
}

export default ProjectsPage;