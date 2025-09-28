// src/components/ProjectCard.jsx

import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#12141f] rounded-lg shadow-lg overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex justify-end space-x-4">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-600 transition-colors text-xl">
            <FaExternalLinkAlt />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-600 transition-colors text-xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;