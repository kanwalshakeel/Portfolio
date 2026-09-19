import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          <div className="flex flex-col gap-4">

            <p className="bg-[#111A16] text-[#22C55E] w-fit px-3 py-1 rounded">
              Hello I'm
            </p>

            <div className="flex text-4xl gap-2 font-bold">
              <h1 className="text-white">Kanwal</h1>
              <h1 className="text-[#22C55E]">Shakeel</h1>
            </div>

            <h2 className="text-white text-xl">
              MERN Stack Developer
            </h2>

            <p className="text-[#A1A1AA] max-w-xl leading-7">
              I build modern, fast and responsive web applications using
              MongoDB, Express.js, React.js and Node.js. Passionate about
              clean code, great UI/UX and turning ideas into reality.
            </p>

            <div>
              <a
                href="https://github.com/kanwalshakeel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22C55E] text-black rounded px-4 py-2 font-medium hover:bg-[#16A34A] transition"
              >
                View my projects
                <span className="text-xl font-bold">→</span>
              </a>
            </div>

          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/image.png"
              alt="Developer illustration"
              className="w-full max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;