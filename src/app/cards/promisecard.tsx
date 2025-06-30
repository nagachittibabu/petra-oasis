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
            className="flex flex-col justify-between items-center bg-white p-6 sm:p-8 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={imageurl}
              alt="promise image"
              width={300}
              height={200}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-black text-center">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-center text-gray-600 mt-2">
              {description}
            </p>
            <button className="mt-4 border-2 border-red-200 text-red-400 rounded-full px-6 py-2 text-sm font-semibold uppercase transition-transform hover:scale-105">
              Read more..
            </button>
          </div>
  )
}

export default PromiseCard