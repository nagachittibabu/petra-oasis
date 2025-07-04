import React from 'react'
import HomeCarousel from '../components/carousel'
import ContactSection from '../components/contactSection'
import CoreValueSection from '../components/corevalueSection'
import ProjectSection from '../components/projectSection'
import PromiseSection from '../components/promiseSection'
import TeamSection from '../components/TeamSection'

const HomePage = () => {

  return (
    <div className='w-full h-full  '>
      <HomeCarousel />
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <ContactSection />
      <TeamSection />

    </div>
  )
}

export default HomePage