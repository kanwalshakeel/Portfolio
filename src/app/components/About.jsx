import React from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";



const About = () => {
  return (
    <section
      id="about"
      className="bg-[#081018] text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

     
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-emerald-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-2">
            A little bit about me
          </p>
        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

         
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              MERN Stack Developer
            </h3>

            <p className="text-gray-400 leading-7 mb-4">
              I'm a passionate web developer focused on building modern,
              responsive and user-friendly web applications. I enjoy turning
              ideas into functional and clean digital experiences.
            </p>

            <p className="text-gray-400 leading-7">
              I work with MongoDB, Express.js, React.js and Node.js and
              continuously improve my skills by building real-world projects.
            </p>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  ">

            
            <div className="bg-[#0c1720] border border-[#1d303d] rounded-lg p-5 cursor-pointer  transition-transform duration-150 
  hover:-translate-y-1  ">
              <MapPin className="text-emerald-400 text-xl mb-4" />

              <p className="text-gray-400 text-sm mb-1">
                Location
              </p>

              <h4 className="font-semibold">
                Pakistan
              </h4>
            </div>

          
            <div className="bg-[#0c1720] border border-[#1d303d] rounded-lg p-5 cursor-pointer  transition-transform duration-150 
  hover:-translate-y-1 ">
              <GraduationCap className="text-emerald-400 text-xl mb-4" />

              <p className="text-gray-400 text-sm mb-1">
                Degree
              </p>

              <h4 className="font-semibold">
                BS Computer Science
              </h4>
            </div>

            
            <div className="bg-[#0c1720] border border-[#1d303d] rounded-lg p-5 cursor-pointer  transition-transform duration-150 
  hover:-translate-y-1 ">
              <Briefcase className="text-emerald-400 text-xl mb-4" />

              <p className="text-gray-400 text-sm mb-1">
                Experience
              </p>

              <h4 className="font-semibold">
                Fresher
              </h4>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;