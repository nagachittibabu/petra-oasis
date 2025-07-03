'use client';

import React from 'react';
import Image from 'next/image';
import { about } from '../export';

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-20 px-5 sm:px-10 lg:px-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-16">
        About Us
      </h2>

      <div className="flex flex-col gap-20">
        {about.map((item, index) => (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}
          >
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-black">{item.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg">{item.para1}</p>
              <p className="text-gray-700 text-base sm:text-lg">{item.para2}</p>
              <p className="text-gray-700 text-base sm:text-lg">{item.para3}</p>
            </div>

            {item.image && (
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl object-contain max-h-[400px] w-full h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;