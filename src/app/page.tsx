import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Project from './components/Project'
import About from './components/About'
import GetInTouch from './components/GetInTouch'

const page = () => {
  return (
    <div className='bg-[#0A0F0D];'>
      <Navbar/>
      <Hero/>
      <Skill/>
      <Project/>
      <About/>
      <GetInTouch/>
    </div>
  )
}

export default page