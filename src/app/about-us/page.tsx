'use client';

import React from 'react';
import Image from 'next/image';
import { about } from '../export';

const AboutUs = () => {
  return (
    <section
      className="w-full bg-gradient-to-r from-orange-400 to-blue-500"
    >
      <div className='w-full h-[500px] bg-blue-900' id="about">
        <div className='w-full h-full bg-black opacity-50 flex items-end '><div className='text-white w-full h-[100px] border'>about_us</div></div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center text-black mt-8">
          About Us
        </h2>

        <div className="flex flex-col gap-10 mt-14">
          {about.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-10 xl:gap-16`}
            >
              <div className="w-full md:w-1/2 space-y-4 ml-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-4">
                  {item.para1}
                </p>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-4">
                  {item.para2}
                </p>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-4">
                  {item.para3}
                </p>
              </div>

              {item.image && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={700}
                      height={500}
                      className="rounded-xl object-contain w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;