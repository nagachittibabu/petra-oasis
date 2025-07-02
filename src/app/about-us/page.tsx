'use client';

import React from 'react';
import Image from 'next/image';
import { about } from '../export';


const AboutUs = () => {
  return (
    <div id="services" className="w-full flex flex-col justify-center items-center gap-20 bg-cover h-fit py-=20 lg:px-20 px-10 bg-center">
      <div className="w-full bg-cover bg-center px-4 sm:px-6 lg:px-20 pt-20">
        <h1 className="text-black text-center text-2xl sm:text-3xl font-bold mb-10">
          About Us
        </h1>

        <div className="flex flex-col gap-12">
          {about.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col-reverse ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-start gap-6  p-6 `}
            >
              <div className="w-full md:w-1/2 ml-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-800 text-lg sm:text-lg">{item.para1}</p>
                <p className="text-gray-800 text-lg sm:text-lg">{item.para2}</p>
                <p className="text-gray-800 text-lg sm:text-lg">{item.para3}</p>

               </div>

              {item.image && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src={item.image} alt={item.title} width={800} height={800} className="object-contain rounded-lg w-full h-full max-h-[500px] sm:max-h-[600px] pt-24 ml-12"
                  />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
