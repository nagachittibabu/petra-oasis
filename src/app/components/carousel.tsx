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
    <div className={`w-full h-max  relative transform transition-all duration-700 ease-out ${animate ? 'scale-100 opacity-105' : 'scale-90 opacity-50'
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
        className=""
      >
        {banners.map((src, i) => (
          <div key={i} className="w-full h-[300px] xl:h-screen lg:h-screen md:h-screen sm:h-[610px] banner flex justify-center items-center ">
            <Image
              src={src}
              alt={`Banner ${i + 1}`}
              fill
              className="object-fit"
              priority={i === 0}
            />
            <div className='w-full h-full absolute left-0 top-0 bg-gray-900 opacity-60 '></div>
            <div className='xl:w-1/3 lg:w-[41%] md:w-[50%] sm:w-[50%] h-max absolute xl:left-1/7 xl:top-[40%] lg:left-1/8 lg:top-[40%] md:left-1/8  md:top-[50%] sm:left-1/9 sm:top-[50%] text-white  text-left p-2 width75 banner_content '>
              <h1 className='xl:text-[26px] lg:text-[22px] md:text-[18px] sm:text-[14px] tracking-wider font-semibold slide-left welcomeText'>Hello,Welcome to </h1>
              <div className='slide-right h-max '>
                <div className='w-max space-y-0 xl:space-y2 lg:space-y-2 md:space-1.5 sm:space-y-1'>
                  <h1 className='xl:h-[50px] lg:h-[42px] md:h-[34px] sm:h-[29px]  xl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[30px] font-bold titleText height22'><span className="bg-gradient-to-r from-orange-400 via-orange-00 to-blue-500 bg-clip-text text-transparent titleHeight">
                    PETRA OASIS
                  </span></h1>
                  <h2 className='w-full text-right xl:text-[13px] 
                  lg:text-[12px] md:text-[11px] sm:text-[8px] font-semibold subtitle'><span className="bg-gradient-to-r from-blue-400  to-blue-400 bg-clip-text text-transparent ">
                    ELCTROMECHANICAL WORKS L.L.C
                  </span></h2>
                </div>
              </div>
              <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 pl-1 rounded-md  xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] paragraph text-gray-100 pt-2 slide-down '>
                <p className='leading-[13px] xl:leading-[23px] lg:leading-[22px] md:leading-[18px] sm:leading-[16px] tracking-wide  p8'>Our mission is that with our credibility, commitment, quality, cost efficiency,
                  capability and financial soundness, with abundant resources of highly skilled and
                  self-motivated engineers and staff make us a perfect choice for solving any kind of
                  electro-mechanical work requirements in major projects.....</p>
              </div>
              <div className='w-full'>
                <button className="xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[11px] xl:px-6 xl:py-2 lg:px-5 lg:py-1.5  md:px-3 md:py-1 sm:px-2.5 sm:py-0.5  font-medium rounded-sm transition duration-300 cursor-pointer slide-right font12 read_more ">
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