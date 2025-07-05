import Image from 'next/image';
import React from 'react';

interface CoreValueCardProps {
  imageurl: string;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ imageurl, title, description }) => {
  return (
    <div
      className="w-[90%] h-[260px] xl:h-[350px] lg:h-[340px] md:h-[320px] sm:h-[250px] flex flex-row items-center bg-gray-50 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 core_value xl:flex-col lg:flex-col md:flex-col sm:flex-row"
    >
      <div className='w-[30%] xl:h-[40%] lg:h-[40%] md:h-[40%] sm:h-[90%] flex items-center justify-center  height75'>
        <Image
          src={imageurl}
          alt={title}
          width={96}
          height={96}
          className="xl:w-[90%] xl:h-[90%] lg:w-[90%] lg:h-[80%] md:w-[90%] md:h-[75%] sm:w-[70%] sm:h-[50%]  rounded-lg width50 height50 "
        />
      </div>
      <div className='w-[90%] xl:h-[60%] lg:h-[60%] md:h-[60%] sm:h-[80%]  flex flex-col items-center justify-center height75'>
        <h2 className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]  font-semibold text-black text-center mb-2 font13 ">
          {title}
        </h2>

        <p className="w-[90%] text-justify leading-[13px] xl:leading-[15px] lg:leading-[13px] md:leading-[12px] sm:leading-[14px] xl:text-[12px] lg:text-[11px] md:text-[12px] sm:text-[13px] text-gray-600 font10">{description}</p>
      </div>

    </div>
  )
}

export default CoreValueCard;