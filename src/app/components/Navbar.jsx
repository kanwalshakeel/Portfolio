import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 py-5 bg-[#0A0F0D]">

      <div>
        <Link
          href="#home"
          className="text-white text-base sm:text-xl font-semibold whitespace-nowrap"
        >
          &lt;/&gt; <span className="text-[#22C55E]">Kanwal Shakeel</span>
        </Link>
      </div>

    
      <div className="hidden md:block">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="#home"
              className="text-[#A1A1AA] hover:text-[#22C55E] transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#skill"
              className="text-[#A1A1AA] hover:text-[#22C55E] transition"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              href="#projects"
              className="text-[#A1A1AA] hover:text-[#22C55E] transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-[#A1A1AA] hover:text-[#22C55E] transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="text-[#A1A1AA] hover:text-[#22C55E] transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      
      <div>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-[#22C55E] text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-[#16A34A] transition"
        >
          Resume
          <FiDownload className="text-sm sm:text-lg" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
