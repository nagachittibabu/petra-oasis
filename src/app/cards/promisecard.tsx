import React from 'react'
import Image from '../../../node_modules/next/image'
interface PromiseCardProps {
  imageurl: string;
  title: string;
  description: string;
}

const PromiseCard: React.FC<PromiseCardProps> = ({ imageurl, title, description }) => {
  return (
    <div
      className="w-[90%] xl:w-3/4 lg:w-[85%] md:w-[90%]
      sm:w-[90%]  h-full bg-white xl:p-8 lg:p-6 md:p-3 sm:p-8 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
    >
      <div className='w-full h-[40%]  flex justify-center items-center '>
        <div className='xl:w-[85%] xl:h-[85%] lg:w-[95%] lg:h-[95%] md:w-[95%] md:h-[95%] sm:w-[100%] sm:h-[100%] flex justify-center items-center height90  width75'>
        <Image
          src={imageurl}
          alt="promise image"
          width={300}
          height={200}
          className="w-full h-full  rounded-lg object-fill "
        />
        </div>
      </div>
      <div className='w-full h-[60%] flex flex-col justify-center items-center '>
        <div className='xl:w-full  lg:w-full  md:w-[95%]  sm:w-[100%]  pt-2 space-y-4 xl:space-y-4 lg:space-y-3 md:space-y-2 sm:sapce-y-2 h-[70%] width75'>
        <h2 className="h-[24%] text-lg xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[12px]    font-semibold text-black text-center leading-[20px] font14 font13">
          {title}
        </h2>
        <p className="xl:text-[13px] lg:text-[11px] md:text-[10px] sm:text-[10px] text-justify text-gray-600 overflow-hidden font12 font10 leading-[13px] xl:leading-[18px] lg:leading-[15px] md:leading-[14px] sm:leading-[14px] font8 font6">
          {description}
        </p>
        </div>
        <div className='w-[90%] flex justify-center items-center h-1/4  l:w-full  lg:w-[95%]  md:w-[95%]  sm:w-[100%]'>
          <button className="border-2 border-red-200 text-orange-400 rounded-lg text-[12px] font-semibold  hover:bg-orange-300 hover:text-black h-max px-3 py-1 p2">
            Read more..
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromiseCard