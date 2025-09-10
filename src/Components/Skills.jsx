import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-red-500 text-2xl sm:text-3xl" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400 text-2xl sm:text-3xl" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-2xl sm:text-3xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-700 text-2xl sm:text-3xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 text-2xl sm:text-3xl" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-2xl sm:text-3xl" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white text-2xl sm:text-3xl" />,
    },
  ];

  return (
    <section
      className="bg-brand-background py-16 px-6 sm:px-12 md:px-18 font-body text-center"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-10">
        My Skills
      </h2>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        data-aos="zoom-in"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos-delay={index * 100}
            className="flex flex-col  sm:flex-row items-center justify-center gap-2 px-4 py-3 sm:px-3 sm:py-4 bg-brand-secondary text-white rounded-xl sm:text-base font-medium transform transition-transform duration-500 hover:-translate-y-2"
          >
            {skill.icon}
            <span className="md:text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
