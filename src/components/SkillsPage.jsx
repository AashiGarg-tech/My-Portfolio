// src/pages/SkillsPage.jsx

import React from "react";

function SkillsPage() {
  const progLang = [
    { name: "Python" },
    { name: "C++" },
    { name: "C" },
  ];

  const aiMlSkills = [
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "Keras" },
    { name: "CNN" },
    { name: "HuggingFace Transformers" },
    { name: "Scikit-learn" },
    { name: "NLTK" },
    { name: "FAISS" },
    { name: "RAG" },
  ];

  const webDevSkills = [
    { name: "React Js" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
    { name: "JavaScript" },
    { name: "Node Js" },
    { name: "Express Js" },
    { name: "RESTful APIs" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
  ];

  const tools = [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "Streamlit" },
    { name: "Google Colab" },
    { name: "Figma" },
    { name: "Canva" },
  ];

  const renderSkills = (title, skills) => (
    <div
      className="
      group
      bg-[#12141f]
      border border-white/5
      rounded-2xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#fa3c68]/30
      hover:shadow-[0_18px_40px_rgba(250,60,104,.12)]
    "
    >
      <div className="w-10 h-1 rounded-full bg-[#fa3c68] mb-5"></div>

      <h2 className="text-3xl font-bold mb-8 transition-all duration-300 group-hover:translate-x-1">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="
            px-4
            py-2
            rounded-full
            bg-[#1b1d2a]
            border border-[#fa3c68]/15
            text-[#ff8cab]
            font-medium
            text-sm
            cursor-default
            transition-all
            duration-300
            hover:bg-[#fa3c68]
            hover:text-white
            hover:border-[#fa3c68]
            hover:-translate-y-1
            hover:shadow-[0_8px_18px_rgba(250,60,104,.25)]
          "
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-8 pt-20 pb-16 md:px-16 text-white relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,60,104,0.06),transparent_35%)]"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#fa3c68]">
          Skills
        </h1>

        <div className="mt-5 flex justify-center">
          <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#fa3c68] to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

        {renderSkills("Programming Languages", progLang)}

        {renderSkills("AI / ML", aiMlSkills)}

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {renderSkills("Web Development", webDevSkills)}

        {renderSkills("Tools", tools)}

      </div>

    </div>
  );
}

export default SkillsPage;