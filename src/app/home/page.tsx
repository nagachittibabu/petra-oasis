import React from 'react'
import HomeCarousel from '../components/carousel';
import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';
import ContactPage from '../contact-us/page';

const HomePage = () => {

  return (
    <div className='w-full h-full  '>
      <HomeCarousel />
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <ContactPage />
    </div>
  )
}

export default HomePage;