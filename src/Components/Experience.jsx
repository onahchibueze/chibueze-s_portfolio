import React from "react";

const Experience = () => {
  const stats = [
    { label: "Years of Experience", value: "1.5+" },
    { label: "Completed Projects", value: "3+" },
    { label: "Happy Clients", value: "2+" },
    { label: "Technologies Mastered", value: "8+" },
  ];

  const skillExperience = [
    { skill: "React", years: "1.5+ years" },
    { skill: "Node.js", years: "1.5+ years" },
    { skill: "MongoDB", years: "1+ years" },
    { skill: "Tailwind CSS", years: "2+ years" },
    { skill: "JavaScript", years: "3+ years" },
    { skill: "Git & GitHub", years: "2+ years" },
  ];

  return (
    <section className="bg-brand-background py-16 px-6 sm:px-10 md:px-20 lg:px-32 font-body">
      <h2
        className="text-3xl sm:text-4xl font-bold text-brand-secondary mb-12 text-center"
        data-aos="fade-up"
      >
        My Experience
      </h2>

      {/* Global Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-brand-secondary text-brand-backgroundStart py-6 px-4 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <span className="block text-3xl sm:text-4xl font-bold text-brand-orange">
              {stat.value}
            </span>
            <span className="block text-sm sm:text-base mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Per-Skill Experience */}
      <div
        className="bg-brand-secondary p-6 sm:p-8 rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-brand-orange mb-6 text-center">
          Skill Experience
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-brand-backgroundStart">
          {skillExperience.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-brand-backgroundStart/20 p-4 rounded-lg hover:bg-brand-backgroundStart/30 transition w-full"
            >
              <span className="text-lg sm:text-xl font-semibold">
                {item.skill}
              </span>
              <span className="text-sm sm:text-base text-gray-300">
                {item.years}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
