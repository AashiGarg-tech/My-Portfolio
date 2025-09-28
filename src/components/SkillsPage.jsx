// src/pages/SkillsPage.jsx

import React from 'react';

function SkillsPage() {
  const frontendSkills = [
    { name: 'React Js', icon: '⚛️' },
    { name: 'Next Js', icon: '➡️' },
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Material UI', icon: '🧱' },
  ];

  const backendSkills = [
    { name: 'Node Js', icon: '🟢' },
    { name: 'Express Js', icon: '💨' },
    { name: 'Graph Ql', icon: '📊' },
    { name: 'Python', icon: '🐍' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Postgresql', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
  ];

  const ProgLang = [
    { name: 'C++', icon: '⚛️' },
    { name: 'C', icon: '➡️' },
    { name: 'Python', icon: '📄' },
    { name: 'R', icon: '🎨' },
  ];

  const Others = [
    { name: 'Github', icon: '⚛️' },
    { name: 'VS Code', icon: '➡️' },
    { name: 'Canva', icon: '📄' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Vercel', icon: '📜' },
    { name: 'Netlify', icon: '🧱' },
  ];

  const renderSkills = (skills) => (
    <div className="flex flex-wrap justify-center gap-4 px-6 py-12 bg-[#12141f] rounded-lg shadow-lg">
      {skills.map(skill => (
        <span key={skill.name} className="flex items-center space-x-2 text-white bg-[#242633] px-4 py-2 rounded-full border border-purple-400">
          {/* <span className="text-xl">{skill.icon}</span> */}
          <span className="font-semibold">{skill.name}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto p-8 pt-16 md:p-16 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4">Skills</h1>
      <div className="border-b-2 border-purple-400 w-12 mx-auto mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-6">Frontend</h2>
          {renderSkills(frontendSkills)}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-6">Backend</h2>
          {renderSkills(backendSkills)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-6">Programming Languages</h2>
          {renderSkills(ProgLang)}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-6">Others</h2>
          {renderSkills(Others)}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;