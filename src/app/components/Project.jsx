import React from "react";
import projects from "../data/Project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#04090e] text-white min-h-screen py-20 px-6 md:px-16"
    >
      
      <div className="px-14 mb-14">
        <h1 className="text-2xl md:text-4xl font-bold">
          My <span className="text-teal-300">Projects</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Some of my recent work
        </p>
      </div>

   
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0d1822] border border-[#1b2a36] rounded-xl overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            
            <div className="h-48 bg-[#101d27] flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

           
            <div className="p-6">
            
              <h2 className="text-xl font-semibold mb-3">
                {project.title}
              </h2>

             
              <p className="text-gray-400 text-sm leading-6 mb-5">
                {project.description}
              </p>

              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#172530] text-teal-300 px-3 py-1 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-teal-400 hover:text-teal-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;