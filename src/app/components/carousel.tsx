'use client'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from '../../../node_modules/next/image'

const banners = [
  '/images/construction-banner.png',
  '/images/construction-banner.png',
  '/images/banner.png'
]
const HomeCarousel = () => {
  const SLIDE_DURATION_MS = 10000

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className={`w-full h-[300px] lg:h-screen md:h-[400px] sm:h-[300px]  relative transform transition-all duration-700 ease-out ${animate ? 'scale-100 opacity-105' : 'scale-90 opacity-50'
      }`}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={SLIDE_DURATION_MS}
        transitionTime={800}
        swipeable
        emulateTouch
        className="h-full"
      >
        {banners.map((src, i) => (
          <div key={i} className=" w-full h-[300px] lg:h-screen md:h-[400px] sm:h-[300px]  banner flex justify-center items-center relative">
            <Image
              src={src}
              alt={`Banner ${i + 1}`}
              layout="fill"
              objectFit="cover"
              className=""
              priority={i === 0}
            />
            <div className='w-full h-full absolute left-0 top-0 bg-gray-900 opacity-60 '></div>
            <div className='w-1/3 h-max absolute left-50 top-70 text-white  text-left '>
              <h1 className='  text-[26px] tracking-wider font-semibold slide-left'>Hello,Welcome to </h1>
              <div className='relative slide-right'>
                <h1 className='text-[50px] font-bold '><span className="bg-gradient-to-r from-orange-400 via-orange-00 to-blue-500 bg-clip-text text-transparent ">
                  PETRA OASIS
                </span></h1>
                <h2 className='text-[13px] absolute bottom-[-1] right-50 font-semibold'><span className="bg-gradient-to-r from-blue-400  to-blue-400 bg-clip-text text-transparent">
                  ELCTROMECHANICAL WORKS L.L.C
                </span></h2>
              </div>
              <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 rounded-md text-overflow text-[14px] text-gray-100 pt-2 slide-down'>
                <p className='leading-[23px] tracking-wide'>Our mission is that with our credibility, commitment, quality, cost efficiency,
                  capability and financial soundness, with abundant resources of highly skilled and
                  self-motivated engineers and staff make us a perfect choice for solving any kind of
                  electro-mechanical work requirements in major projects.....</p>
              </div>
              <div className='w-full pt-1'>
                <button className="mt-6 px-6 py-2 read_more font-semibold rounded-lg transition duration-300 cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )

}
export default HomeCarousel