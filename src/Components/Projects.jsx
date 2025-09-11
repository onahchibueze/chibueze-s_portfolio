import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import commerce from "../assets/images/commerce.png";
import fullstack from "../assets/images/fullstack.png";
import portfolio from "../assets/images/portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "Food E-Commerce Platform",
      description:
        "A full-stack e-commerce app with product search, cart, and secure checkout. Built with React, Node.js, and MongoDB.",
      image: fullstack,
      liveLink: "https://dallybyte.onrender.com",
      githubLink: "https://github.com/onahchibueze/Dallybyte.git",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio showcasing skills, projects, and contact form integration using EmailJS.",
      image: portfolio,
      liveLink: "https://chibueze-s-portfolio.vercel.app/",
      githubLink: "https://github.com/onahchibueze/chibueze-s_portfolio.git",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A responsive food ordering web app with real-time order tracking, built with React and Tailwind CSS.",
      image: commerce,
      liveLink: "https://frontend-red-xi.vercel.app/",
      githubLink: "https://github.com/onahchibueze/E-commerce.git",
    },
  ];

  return (
    <section className="bg-brand-background py-16 px-6 sm:px-10 md:px-20 lg:px-32 font-body">
      <h2
        className="text-3xl sm:text-4xl font-bold text-brand-secondary mb-12 text-center font-heading"
        data-aos="fade-up"
      >
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-brand-backgroundEnd rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
                loading="lazy"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-brand-secondary mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-secondaryHover mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-auto flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-brand-secondary text-brand-backgroundStart rounded-lg hover:bg-brand-secondaryHover transition-all duration-300 text-sm sm:text-base"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-brand-backgroundStart text-brand-secondary rounded-lg hover:bg-brand-secondaryHover hover:text-brand-backgroundStart transition-all duration-300 text-sm sm:text-base"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
