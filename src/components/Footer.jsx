import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/AashiGarg-tech",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/aashi-garg-3b6713326/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      url: "mailto:aashigarg2504@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
  ];

  return (
    <footer className="relative mt-20 bg-[#12141f] border-t border-[#fa3c68]/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(250,60,104,0.05),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Top Section */}
        <div className="flex flex-col items-center gap-8 border-b border-white/5 pb-8">

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8">

            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-[#fa3c68]
                  hover:-translate-y-0.5
                "
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Social Icons */}
          <div className="flex gap-5">

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  h-11
                  w-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#1b1d2a]
                  border border-[#fa3c68]/15
                  text-[#ff8cab]
                  transition-all
                  duration-300
                  hover:bg-[#fa3c68]
                  hover:text-white
                  hover:scale-110
                  hover:-translate-y-1
                  hover:shadow-[0_10px_20px_rgba(250,60,104,.25)]
                "
              >
                <social.icon size={18} />
              </a>
            ))}

          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-sm text-gray-500">

          © {currentYear}{" "}
          <span className="text-white font-medium">
            Aashi Garg
          </span>

          <span className="mx-2 text-gray-600">•</span>

          Built with{" "}
          <span className="text-[#ff8cab]">
            React & Tailwind CSS
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;