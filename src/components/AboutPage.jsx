// src/pages/AboutPage.jsx

import React from "react";

function AboutPage() {
  return (
    <div className="container mx-auto px-8 pt-20 pb-16 md:px-16 text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#fa3c68]">
          About Me
        </h1>

        <div className="mt-5 flex justify-center">
          <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#fa3c68] to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="flex flex-col gap-8">

          {/* Bio */}
          <div
            className="relative bg-[#12141f] border border-white/5 rounded-2xl p-8 overflow-hidden
            transition-all duration-300 hover:-translate-y-2
            hover:border-[#fa3c68]/30
            hover:shadow-[0_18px_40px_rgba(250,60,104,.12)]"
          >
            {/* Accent line */}
            <div className="absolute left-0 top-8 bottom-8 w-[4px] rounded-r-full bg-[#fa3c68]"></div>

            <div className="pl-6">
              <p className="text-gray-300 leading-8 mb-6">
                I'm a CSE (AI) student at Indira Gandhi Delhi Technical
                University for Women, building at the intersection of machine
                learning, GenAI, and full-stack development. I've trained CNNs
                for real-world image classification, built RAG pipelines that
                make dense legal text searchable, and shipped production APIs
                used across full applications.
              </p>

              <p className="text-gray-300 leading-8">
                I'm currently interning at DRDO's Directorate of IT & Cyber
                Security, working on ML-powered analytics for software license
                data. Outside of coursework and internships, I've published NLP
                research and competed in national hackathons — I like problems
                that don't have a clean answer yet.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {[
              {
                title: "AI / ML",
                text: "CNNs, RAG pipelines, and NLP models built with TensorFlow, PyTorch, and HuggingFace Transformers.",
              },
              {
                title: "Full-Stack Development",
                text: "REST APIs and full applications with React, Node.js, Express, and MongoDB/PostgreSQL.",
              },
              {
                title: "GenAI Applications",
                text: "Retrieval-augmented generation, vector search with FAISS, and prompt engineering for real use cases.",
              },
              {
                title: "Problem Solving",
                text: "From hackathon finals to published research — I like turning ambiguous problems into working systems.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-[#12141f] border border-white/5 rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#fa3c68]/40
                hover:shadow-[0_18px_40px_rgba(250,60,104,.12)]"
              >
                <div className="w-10 h-1 rounded-full bg-[#fa3c68] mb-4"></div>

                <h3 className="text-xl font-bold text-[#ff7a9c] mb-3 transition-all duration-300 group-hover:translate-x-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8">

          {/* Quick Facts */}
          <div
            className="bg-[#12141f] border border-white/5 rounded-2xl p-8
            transition-all duration-300 hover:-translate-y-2
            hover:border-[#fa3c68]/30
            hover:shadow-[0_18px_40px_rgba(250,60,104,.12)]"
          >
            <h2 className="text-3xl font-bold mb-8">Quick Facts</h2>

            <div className="space-y-5">

              {[
                ["Location", "Delhi, India"],
                ["Education", "B.Tech CSE (AI) — CGPA 9.81"],
                ["Currently", "Interning at DRDO"],
                ["Availability", "Open to Internships & Collaboration"],
              ].map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center border-b border-white/5 pb-4"
                >
                  <span className="font-semibold text-gray-400">
                    {key}
                  </span>

                  <span className="text-gray-200 text-right">
                    {value}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Interests */}
          <div
            className="bg-[#12141f] border border-white/5 rounded-2xl p-8
            transition-all duration-300 hover:-translate-y-2
            hover:border-[#fa3c68]/30
            hover:shadow-[0_18px_40px_rgba(250,60,104,.12)]"
          >
            <h2 className="text-3xl font-bold mb-8">Interests</h2>

            <div className="flex flex-wrap gap-3">

              {[
                "GenAI & RAG",
                "Computer Vision",
                "NLP Research",
                "Full-Stack Dev",
                "Open Source",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full
                  bg-[#1b1d2a]
                  border border-[#fa3c68]/15
                  text-[#ff8cab]
                  text-sm font-semibold
                  transition-all duration-300
                  hover:bg-[#fa3c68]
                  hover:text-white
                  hover:border-[#fa3c68]
                  hover:-translate-y-1
                  cursor-default"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutPage;