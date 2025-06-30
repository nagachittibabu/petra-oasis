'use client'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from '../../../node_modules/next/image'

const banners = [
  '/images/construction-banner.png',
  '/images/construction-banner.png',
  '/images/construction-banner.png'
]
const HomeCarousel = () => {
  const SLIDE_DURATION_MS = 3500

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className={`w-full h-[300px] lg:h-[500px] md:h-[400px] sm:h-[300px]  relative transform transition-all duration-700 ease-out ${animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
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
          <div key={i} className=" w-full h-[300px] lg:h-[500px] md:h-[400px] sm:h-[300px]  banner flex justify-center items-center">
            <Image
              src={src}
              alt={`Banner ${i + 1}`}
              layout="fill"
              objectFit="fit"
              className=""
              priority={i === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )

}
export default HomeCarousel