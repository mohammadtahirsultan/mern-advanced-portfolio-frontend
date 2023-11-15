import React from 'react'
import ProjectCard from '../ProjectCard'
import Testimonials from '../Testimonials'
import HeroSection from '../layout/HeroSection'
import ServicesCard from '../ServicesCard'
import IndustryExperince from '../IndustryExperince'

const Home = () => {
  
 
  return (
    <>
      <HeroSection />
      <ProjectCard />
      <ServicesCard />
      <IndustryExperince />
      <Testimonials />
    </>
  )
}

export default Home