// src/components/ProjectCard.jsx

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
      group
      bg-[#12141f]
      border border-white/5
      rounded-2xl
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#fa3c68]/30
      hover:shadow-[0_20px_50px_rgba(250,60,104,.12)]
    "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-56
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141f] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content */}
      <div className="p-7">

        {/* Accent Bar */}
        <div className="w-10 h-1 rounded-full bg-[#fa3c68] mb-4"></div>

        <h3
          className="
          text-2xl
          font-bold
          text-white
          mb-4
          transition-all
          duration-300
          group-hover:text-[#ff7a9c]
        "
        >
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3">

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
            h-11
            w-11
            rounded-full
            flex
            items-center
            justify-center
            bg-[#1b1d2a]
            border border-[#fa3c68]/20
            text-[#ff8cab]
            transition-all
            duration-300
            hover:bg-[#fa3c68]
            hover:text-white
            hover:scale-110
          "
          >
            <FaExternalLinkAlt />
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
            h-11
            w-11
            rounded-full
            flex
            items-center
            justify-center
            bg-[#1b1d2a]
            border border-[#fa3c68]/20
            text-[#ff8cab]
            transition-all
            duration-300
            hover:bg-[#fa3c68]
            hover:text-white
            hover:scale-110
          "
          >
            <FaGithub />
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;