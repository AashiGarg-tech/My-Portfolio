import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [
  {
    institution: "Defence Research and Development Organisation (DRDO)",
    role:
      "Summer Internship — Directorate of Information Technology & Cyber Security",
    year: "2026",
    dates: "June 2026 – July 2026",
    location: "Delhi, India",

    description:
      "Developing ML-powered backend modules for software license analytics. Worked on large-scale license logs, predictive analytics, and backend optimization for enterprise software usage.",

    achievements: [
      "Processed 10K+ software license records.",
      "Built predictive demand forecasting models.",
    ],

    tech: [
      "Python",
      "Machine Learning",
      "Backend",
      "Data Analytics",
    ],
  },

  {
    institution:
      "Indira Gandhi Delhi Technical University for Women",

    role:
      "Summer Internship — AI-powered Full Stack Development",

    year: "2025",

    dates: "June 2025 – July 2025",

    location: "Delhi, India",

    description:
      "Built scalable full-stack applications using React, Node.js and MongoDB while implementing secure REST APIs and reliable backend architecture.",

    achievements: [
      "Developed 6+ REST APIs (<200ms).",
      "Implemented MongoDB Atlas validation across 5+ collections.",
    ],

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

const ExperienceCard = ({ item }) => {
  return (
    <div
      className="
      bg-[#12141f]
      rounded-3xl
      border
      border-white/5
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#fa3c68]/30
      hover:shadow-[0_20px_50px_rgba(250,60,104,.12)]
      h-full
    "
    >
      {/* Year */}
      <span className="text-[#fa3c68] font-semibold">
        {item.year}
      </span>

      <h2 className="text-2xl font-bold mt-3 leading-tight">
        {item.institution}
      </h2>

      <p className="text-[#ff7a9c] mt-3 font-medium">
        {item.role}
      </p>

      <div className="border-t border-white/5 my-3"></div>

      <div className="flex flex-wrap gap-5 text-sm text-gray-400">

        <span className="flex items-center gap-2">
          <FaCalendarAlt />
          {item.dates}
        </span>

        <span className="flex items-center gap-2">
          <FaMapMarkerAlt />
          {item.location}
        </span>

      </div>

      <p className="mt-3 leading-7 text-gray-300">
        {item.description}
      </p>
            {/* Key Contributions */}

            <div className="mt-4">

<h3 className="text-lg font-semibold text-[#fa3c68] mb-4">
  Key Contributions
</h3>

<div className="space-y-3">

  {item.achievements.map((achievement, index) => (

    <div
      key={index}
      className="
        flex
        items-start
        gap-3
        rounded-xl
        bg-white/5
        p-4
        transition-all
        duration-300
        hover:bg-[#fa3c68]/10
      "
    >

      <div className="mt-2 h-2 w-2 rounded-full bg-[#fa3c68] shrink-0"></div>

      <p className="text-gray-300 text-m leading-6">
        {achievement}
      </p>

    </div>

  ))}

</div>

</div>

{/* Tech Stack */}

<div className="mt-4">

<h3 className="text-lg font-semibold text-[#fa3c68] mb-4">
  Technologies
</h3>

<div className="flex flex-wrap gap-3">

  {item.tech.map((tech, index) => (

    <span
      key={index}
      className="
        px-3
        py-2
        rounded-full
        bg-[#1b1d2a]
        border
        border-[#fa3c68]/20
        text-[#ff8cab]
        text-sm
        transition-all
        duration-300
        hover:bg-[#fa3c68]
        hover:text-white
        hover:border-[#fa3c68]
      "
    >
      {tech}
    </span>

  ))}

</div>

</div>

</div>

);
};

function ExperiencePage() {

return (

<div className="max-w-7xl mx-auto px-6 py-20 text-white relative">

{/* Background Glow */}

<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(250,60,104,0.06),transparent_35%)]"></div>

{/* Heading */}

<div className="text-center mb-16">

<h1 className="text-5xl md:text-6xl font-bold text-[#fa3c68]">
  Experience
</h1>

<div className="mt-5 flex justify-center">

  <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#fa3c68] to-transparent"></div>

</div>

</div>

{/* Experience Cards */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

{experienceData.map((item, index) => (

  <ExperienceCard
    key={index}
    item={item}
  />

))}

</div>

</div>

);

}

export default ExperiencePage;