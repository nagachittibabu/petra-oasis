'use client';

import React from 'react';
import Image from 'next/image';
import { services, Service } from '../export';

const ServicesPage: React.FC = () => {
  return (
    <div id="services" className="w-full flex flex-col justify-center items-center gap-20 bg-cover h-fit py-=20 lg:px-20 px-10 bg-center" style={{ backgroundImage: `url('/service.png')` }}>
      <div className="w-full bg-cover bg-center px-4 sm:px-6 lg:px-20 pt-20">
        <h1 className="text-black text-center text-2xl sm:text-3xl font-bold mb-10">
          What We Do
        </h1>

        <div className="flex flex-col gap-12">
          {services.map((item: Service, index: number) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col-reverse ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-start gap-6 bg-white p-6 rounded-xl shadow-md`}
            >
              <div className="w-full md:w-1/2 ml-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-800 text-lg sm:text-xl mb-4 font-semibold">{item.about}</p>
                <ul className="list-disc list-outside space-y-2 text-gray-700 text-base sm:text-sm flex-wrap">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {item.image && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src={item.image} alt={item.title} width={500} height={500} className="object-contain rounded-lg w-full h-auto max-h-[300px] sm:max-h-[400px]"
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

export default ServicesPage;
