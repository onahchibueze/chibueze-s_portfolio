import React from "react";

const About = () => {
  return (
    <section
      className="bg-brand-background py-16 sm:py-20 px-6 sm:px-10 md:px-24 font-body"
      data-aos="fade-up"
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-10 font-heading text-center"
        data-aos="fade-down"
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 lg:gap-16 bg-brand-secondary p-6 sm:p-8 rounded-xl">
        {/* Left Column: Text */}
        <div
          className="md:w-2/3 text-center md:text-left sm:text-[0.9rem] md:text-base text-base "
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <p className="text-brand-backgroundStart mb-4  ">
            I’m{" "}
            <span className="font-bold text-brand-orange">Chibueze Onah</span>,
            a passionate Full-Stack Developer with{" "}
            <span className="font-bold text-brand-orange">
              2+ years of experience
            </span>{" "}
            building modern, responsive, and high-performance web applications.
          </p>

          <p className="text-brand-backgroundStart mb-4 leading-relaxed">
            My expertise includes{" "}
            <span className="text-brand-orange font-semibold">React</span>,{" "}
            <span className="text-brand-orange font-semibold">Node.js</span>,{" "}
            <span className="text-brand-orange font-semibold">MongoDB</span>,
            and{" "}
            <span className="text-brand-orange font-semibold">
              Tailwind CSS
            </span>
            . I focus on creating seamless user experiences, writing clean,
            maintainable code, and delivering projects on time.
          </p>

          <p className="text-brand-backgroundStart mb-4 leading-relaxed ">
            I thrive in collaborative environments, effectively communicating
            with teams and stakeholders to ensure project success. I’ve built
            multiple full-stack projects, including{" "}
            <span className="text-brand-orange font-semibold">
              e-commerce platforms
            </span>
            ,{" "}
            <span className="text-brand-orange font-semibold">dashboards</span>,
            and <span className="text-brand-orange font-semibold">APIs</span>,
            demonstrating both technical skill and problem-solving abilities.
          </p>
        </div>

        {/* Right Column: Image */}
        <div
          className="md:w-1/3 flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-web-programmer-avatar-png-image_12529205.png"
            alt="Chibueze"
            className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto rounded-full border-4 border-brand-orange object-cover shadow-lg hover:shadow-brand-orange/50 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
