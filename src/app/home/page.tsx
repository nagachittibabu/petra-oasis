import React from 'react'
import Image from '../../../node_modules/next/image'
import HomeCarousel from '../components/carousel'

const HomePage = () => {
    
  return (
    <div className='w-full h-full flex justify-between items-center '>
        <HomeCarousel />
    </div>
  )
}

export default HomePage