import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="bg-hero-gradient flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 font-body min-h-[90vh] pt-[5rem]">
      {/* Text Section */}
      <div
        className="w-full md:w-1/2 text-center md:text-left"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary">
          Hi, I’m Chibueze
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-brand-orange font-medium mt-2">
          Full-Stack Developer
        </h2>

        <p className="text-base sm:text-lg text-brand-secondary mt-2">
          <span className="font-bold text-brand-orange">2+ Years</span> of
          Experience
        </p>

        <p className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg md:text-md text-brand-secondary leading-relaxed">
          I specialize in building modern, responsive, and high-performance web
          applications. I love turning ideas into scalable digital solutions
          that solve real-world problems. Skilled in React, Node.js, MongoDB,
          and Tailwind CSS, I focus on creating seamless user experiences and
          clean, maintainable code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 font-heading justify-center md:justify-start">
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="px-5 py-2 border-2 rounded-2xl border-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-300 cursor-pointer text-sm sm:text-base"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Contact me
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            className="px-5 py-2 border rounded-2xl text-brand-backgroundStart bg-brand-secondary hover:rounded-none hover:bg-brand-secondaryHover hover:text-white transition-all duration-300 text-sm sm:text-base"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            View my work
          </Link>
        </div>
      </div>

      {/* Avatar Section */}
      <div
        className="relative border-4 overflow-hidden rounded-full border-white mb-8 md:mb-0"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Animated neon/wavy border */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full filter blur-xl animate-blob"></div>

        {/* Avatar */}
        <img
          className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover"
          src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-web-programmer-avatar-png-image_12529205.png"
          alt="Developer Avatar"
        />
      </div>
    </section>
  );
};

export default Hero;
