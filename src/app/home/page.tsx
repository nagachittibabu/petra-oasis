import React from 'react'
import HomeCarousel from '../components/carousel';
import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/contactSection';
import AboutUs from '../about-us/pages';



const HomePage = () => {

  return (
    <div className='w-full h-full  '>
      <HomeCarousel/>
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <TeamSection />
      <ContactSection />
       <AboutUs />
    </div>
  )
}

export default HomePage;