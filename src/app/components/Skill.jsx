import React from "react";
import skills from "@/app/data/Skill";

const Skills = () => {
  return (
    <section
      id="skill"
      className="bg-[#081018] text-white min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

       
        <div className="px-1 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-emerald-400">Tech Stack</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Technologies and tools I work with
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0c1720] border border-[#1d303d] rounded-xl p-6 text-center cursor-pointer
              transition-transform duration-200
              hover:-translate-y-2
              active:scale-95"
            >

            
              <div className="h-20 flex items-center justify-center mb-5">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                />
              </div>

             
              <h3 className="text-base font-semibold">
                {skill.name}
              </h3>

             
              <p className="text-sm text-gray-400 mt-2">
                {skill.category}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;