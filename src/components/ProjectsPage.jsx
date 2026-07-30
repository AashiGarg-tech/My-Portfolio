// src/pages/ProjectsPage.jsx

import React from "react";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    title: "LexCPA – AI Legal Assistant",
    description:
      "A RAG-based legal question-answering app enabling semantic search across 107 sections of the Consumer Protection Act, 2019, using contextual retrieval and LLM-based response generation.",
    tech: [
      "Python",
      "Streamlit",
      "Google Gemini API",
      "FAISS",
      "RAG",
      "Prompt Engineering",
    ],
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=800&q=80",
    liveLink: "https://aashigarg-tech-lexcpa-app-thked1.streamlit.app/",
    githubLink: "https://github.com/AashiGarg-tech/LexCPA/",
  },
  {
    title: "BetterX – Student Mental Wellness Platform",
    description:
      "A full-stack mental wellness platform with 6 core modules — anonymous real-time chat, AI support, mood tracking, counselor booking, relaxation resources, and secure role-based access for students, counselors, and admins.",
    tech: ["React.js", "Node.js", "MongoDB", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/AashiGarg-tech/BetterX-Mental-Wellness",
  },
  {
    title: "Plant Disease Detection System",
    description:
      "A CNN-based computer vision model for multi-class plant disease classification across 38 classes, trained on a 50K image dataset, achieving 94.4% accuracy for reliable early disease detection.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "CNN"],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/AashiGarg-tech/Plant-disease-classification-model",
  },
];

function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-20 pb-16 md:px-16 text-white relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(250,60,104,0.06),transparent_35%)]"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#fa3c68]">
          Projects
        </h1>

        <div className="mt-5 flex justify-center">
          <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#fa3c68] to-transparent"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </div>
  );
}

export default ProjectsPage;