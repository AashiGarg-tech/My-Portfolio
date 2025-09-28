// src/components/StarBackground.jsx
import React, { useCallback } from "react";
import Particles from "@tsparticles/react"; // ✅ use the new package
import { loadSlim } from "@tsparticles/slim"; // ✅ new import path

const StarBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); 
  }, []);

  const options = {
    fullScreen: { enable: false }, 
    background: {
      color: { value: "#0d0f19" },
      opacity: 0,
    },
    particles: {
      number: {
        value: 150,
        density: { enable: true, area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }, // ✅ "animation" instead of "anim"
      },
      size: {
        value: 1,
        random: true,
        animation: { enable: true, speed: 0.1, minimumValue: 0.1, sync: false }, // ✅
      },
      links: { enable: false }, // ✅ instead of line_linked
      move: {
        enable: true,
        speed: 0.05,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out", // ✅ instead of out_mode
        bounce: false,
      },
    },
    interactivity: { events: { onHover: { enable: false } } }, // ✅ onHover camelCase
  };

  return (
    <div className="absolute inset-0">
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default StarBackground;
