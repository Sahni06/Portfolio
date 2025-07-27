import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
        My education has been a journey of few ups and few downs but a lot of learning and developement. Here are the details of my academic background
        </p>
      </div>

      {/* Education Container */}
      <div className="relative max-w-8xl mx-max">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-gradient-to-b from-white to-purple-700 h-full"></div>

        {/* Education Items */}
        <div className="space-y-12 lg:space-y-24">
          {education.map((edu, index) => (
            <div 
            key={edu.id} className="relative">
              {/* School Logo Circle */}
              <div
                className={`absolute left-8 lg:left-1/2 transform -translate-x-1/2 ${
                  index % 2 === 0
                    ? "lg:-translate-y-1/2 lg:top-1/2"
                    : "lg:-translate-y-1/2 lg:top-1/2"
                } top-6 z-20`}
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full border-4 border-purple-500 shadow-xl flex items-center justify-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>
              </div>

              {/* Content Box */}
              <div
                className={`ml-20 lg:ml-0 lg:flex ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <div
                  className={`w-full lg:max-w-md ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 lg:p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
                    {/*  and  */}
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="lg:text-sm text-purple-200 text-sm ">
                        {edu.school}
                      </h4>
                      </div>

                      <p className="text-gray-500 text-sm mt-1 font-medium">
                        {edu.date}
                      </p>
                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-gray-400 font-bold"> {edu.desc}</p>
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

export default Education;
