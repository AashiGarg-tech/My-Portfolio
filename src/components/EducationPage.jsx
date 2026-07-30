import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,
    school: "Greenway Modern School",
    degree: "School Education",
    duration: "2010 – 2022",
    location: "Dilshad Garden, Delhi",
    score: "98.8% (Class X)",
    description:
      "Built a strong academic foundation while actively participating in leadership, cultural activities and Olympiads.",
    achievements: [
      "98.8% in CBSE Class X",
      "NCC A Grade Certificate",
      "20+ SOF Gold Medals",
      "1st Position - Zonal & District Singing Competition",
    ],
    skills: [
      "Leadership",
      "Communication",
      "HTML",
      "CSS",
      "Teamwork",
    ],
  },

  {
    id: 2,
    school: "The Vivekananda School",
    degree: "Senior Secondary",
    duration: "2022 – 2024",
    location: "Delhi",
    score: "94% (Class XII)",
    description:
      "Completed higher secondary education with focus on academics and personal development.",
    achievements: ["94% in CBSE Class XII"],
    skills: ["Adaptability", "Flexibility"],
  },

  {
    id: 3,
    school:
      "Indira Gandhi Delhi Technical University for Women",
    degree: "B.Tech CSE (AI)",
    duration: "2024 – Present",
    location: "Delhi",
    score: "CGPA 9.81",
    description:
      "Pursuing Computer Science with Artificial Intelligence while working on full-stack development, machine learning and research.",
    achievements: [
      "Perfect 10 SGPA in 2nd Year",
      "Codeslayer 2k25 Finalist",
      "Research Paper accepted at NLPIR 2025",
      "Top 10 IEEE Open Source Week",
      "2nd Position Snowscript Winter of Code",
    ],
    skills: [
      "React",
      "Node.js",
      "Python",
      "AI",
      "DSA",
      "MongoDB",
      "PostgreSQL",
    ],
  },
];

function EducationPage() {
  const [selected, setSelected] = useState(3);

  const current = educationData.find((e) => e.id === selected);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-white">

      {/* Heading */}

      <div className="text-center mb-20">

        <h1 className="text-5xl md:text-6xl font-bold text-[#fa3c68]">
          Education
        </h1>

        <div className="mt-5 flex justify-center">
          <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#fa3c68] to-transparent"></div>
        </div>

      </div>
            {/* Timeline */}

            <div className="relative mb-16">

{/* Line */}

<div className="absolute top-7 left-0 w-full h-[3px] bg-white/10 rounded-full">
  <div className="absolute inset-0 bg-gradient-to-r from-[#fa3c68]/70 to-[#fa3c68]/20 rounded-full"></div>
</div>

<div className="grid grid-cols-3 relative">

  {educationData.map((item) => {

    const active = selected === item.id;

    return (
      <div
        key={item.id}
        onClick={() => setSelected(item.id)}
        className="cursor-pointer flex flex-col items-center group"
      >

        {/* Circle */}

        <div
          className={`
          z-10
          h-14
          w-14
          rounded-full
          flex
          items-center
          justify-center
          border-4
          transition-all
          duration-300
          ${
            active
              ? "bg-[#fa3c68] border-white scale-110 shadow-[0_0_25px_rgba(250,60,104,.45)]"
              : "bg-[#1c1e2c] border-[#fa3c68]/40 hover:border-[#fa3c68] hover:scale-105"
          }
        `}
        >
          <FaGraduationCap
            className={`text-xl ${
              active ? "text-white" : "text-[#fa3c68]"
            }`}
          />
        </div>

        {/* School */}

        <h3
          className={`mt-6 font-semibold text-center transition-all ${
            active ? "text-white" : "text-gray-400"
          }`}
        >
          {item.school}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {item.duration}
        </p>

      </div>
    );

  })}

</div>

</div>

{/* Details Card */}

<div
className="
  bg-[#141622]
  rounded-3xl
  border
  border-white/5
  p-8
  transition-all
  duration-300
  hover:border-[#fa3c68]/25
  hover:shadow-[0_15px_40px_rgba(250,60,104,.12)]
"
>

<div className="flex flex-wrap items-center justify-between gap-5">

  <div>

    <h2 className="text-3xl font-bold">
      {current.school}
    </h2>

    <p className="mt-2 text-[#fa3c68] text-lg">
      {current.degree}
    </p>

  </div>

  <div className="text-right">

    <p className="text-2xl font-bold text-[#fa3c68]">
      {current.score}
    </p>

  </div>

</div>

<div className="mt-3 flex flex-wrap gap-6 text-gray-400">

  <span className="flex items-center gap-2">
    <FaCalendarAlt />
    {current.duration}
  </span>

  <span className="flex items-center gap-2">
    <FaMapMarkerAlt />
    {current.location}
  </span>

</div>

<div className="border-t border-white/5 my-4"></div>
        {/* Description */}

        <p className="text-gray-300 leading-8">
          {current.description}
        </p>

        {/* Achievements */}

        <div className="mt-3">

          <h3 className="text-xl font-semibold text-[#fa3c68] mb-5">
            Key Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {current.achievements.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  bg-white/5
                  rounded-xl
                  p-4
                  hover:bg-[#fa3c68]/10
                  transition
                "
              >
                <div className="mt-2 h-2 w-2 rounded-full bg-[#fa3c68] shrink-0"></div>

                <p className="text-gray-300">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Skills */}

        <div className="mt-3">

          <h3 className="text-xl font-semibold text-[#fa3c68] mb-5">
            Skills Gained
          </h3>

          <div className="flex flex-wrap gap-3">

            {current.skills.map((skill, index) => (
              <span
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#1b1d2a]
                  border
                  border-[#fa3c68]/20
                  text-[#ff8cab]
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-[#fa3c68]
                  hover:text-white
                  hover:border-[#fa3c68]
                "
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>

      {/* Quote */}

      <div className="mt-16 text-center">

      </div>

    </div>
  );
}

export default EducationPage;