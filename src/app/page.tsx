import React from 'react'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Project from './components/Project'
import About from './components/About'
import GetInTouch from './components/GetInTouch'

export const metadata = {
  title: "Kanwal Shakeel | MERN Stack Developer",
  description:
    "Portfolio of Kanwal Shakeel, a MERN Stack Developer building modern, responsive and user-friendly web applications.",
};

const page = () => {
  return (
    <div className='bg-[#0A0F0D];'>
      <Hero/>
      <Skill/>
      <Project/>
      <About/>
      <GetInTouch/>
    </div>
  )
}

export default page