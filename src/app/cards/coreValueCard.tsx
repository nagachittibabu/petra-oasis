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
    className="w-full h-[270px] xl:h-[350px] lg:h-[350px] md:h-[320px] sm:h-[300px] flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 width90 core_value"
>
<div className='w-[30%] h-[40%]  flex items-center justify-center'>
    <Image
        src={imageurl}
        alt={title}
        width={96}
        height={96}
        className="xl:w-[90%] xl:h-[90%] lg:w-[90%] lg:h-[80%] md:w-[90%] md:h-[75%] sm:w-[90%] sm:h-[75%]  rounded-lg width100 height75"
    />
  </div>
    <h2 className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]  font-semibold text-black text-center mb-2 font13 ">
        {title}
    </h2>

    <p className="text-justify leading-[13px] xl:leading-[15px] lg:leading-[13px] md:leading-[12px] sm:leading-[10px] xl:text-[12px] lg:text-[11px] md:text-[12px] sm:text-[10px] text-gray-600 font10">{description}</p>

</div>
  )
}

export default CoreValueCard;