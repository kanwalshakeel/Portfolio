import React from "react";
import skills from "@/app/data/Skill";
const Skills = () => {
  return (
    <section id="skill" className="bg-[#081018] text-white py-12">
      
      <div className="max-w-6xl mx-auto px-6">

       
        <div className="mb-6">
          <h2 className="text-3xl font-bold">
            My <span className="text-emerald-400">Tech Stack</span>
          </h2>

          <p className="text-gray-400 mt-1">
            Technologies and tools I work with
          </p>
        </div>

   
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 ">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0c1720] border border-[#1d303d] rounded-lg p-4 text-center cursor-pointer  transition-transform duration-150 
  hover:-translate-y-1 
  active:scale-95 "
            >

           
              <div className="h-12 flex items-center justify-center mb-3 ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              
              <h3 className="text-sm font-semibold">
                {skill.name}
              </h3>

            
              <p className="text-xs text-gray-400 mt-1">
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