import React from 'react'
import HomeCarousel from '../components/carousel'
import CoreValueSection from '../components/corevalueSection'
import ProjectSection from '../components/projectSection'
import PromiseSection from '../components/promiseSection'
import ContactPage from '../contact-us/page'
import TeamSection from '../components/TeamSection'
import ContactSection from '../components/contactSection'

const HomePage = () => {

  return (
    <div className='w-full h-full  '>
      <HomeCarousel />
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default HomePage;