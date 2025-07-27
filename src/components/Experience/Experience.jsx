import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-8xl mx-max">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-gradient-to-b from-white to-purple-700 h-full"></div>

        {/* Timeline Items */}
        <div className="space-y-12 lg:space-y-24">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Company Logo Circle */}
              <div className={`absolute left-8 lg:left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? 'lg:-translate-y-1/2 lg:top-1/2' : 'lg:-translate-y-1/2 lg:top-1/2'} top-6 z-20`}>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full border-4 border-purple-500 shadow-xl flex items-center justify-center">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>
              </div>

              {/* Content Box */}
              <div className={`ml-20 lg:ml-0 lg:flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <div className={`w-full lg:max-w-md ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 lg:p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
                    {/* Role and Company */}
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {experience.role}
                      </h3>
                      <h4 className="lg:text-sm text-purple-200 text-sm ">
                        {experience.company}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 font-medium">
                        {experience.date}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      {experience.desc}
                    </p>

                    {/* Skills */}
                    <div>
                      <h5 className="font-semibold text-white mb-3 text-sm lg:text-base">Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-purple-500/20 text-purple-300 px-2 py-1 lg:px-3 lg:py-1.5 text-xs rounded-full border border-purple-500/30 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};


export default Experience;
