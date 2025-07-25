import React from 'react'
import HomeCarousel from '../components/carousel';
import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/contactSection';



const HomePage = () => {

  return (
    <div className='w-full h-full flex flex-col space-y-4 '>
      <HomeCarousel/>
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <ContactSection />
      <TeamSection  />
    </div>
  )
}

export default HomePage;