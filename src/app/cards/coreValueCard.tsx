import React from 'react'
import Image from '../../../node_modules/next/image'
interface CoreValueCardProps {
    imageurl: string;
    title: string;
    description: string;
  }
  
  const CoreValueCard: React.FC<CoreValueCardProps> = ({ imageurl, title, description }) => {  
  return (
    <div
    className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-transform duration-300 hover:scale-105"
>
    <Image
        src={imageurl}
        alt={title}
        width={96}
        height={96}
        className="w-24 h-24 mb-4"
    />

    <h2 className="text-lg sm:text-xl font-semibold text-black text-center mb-2">
        {title}
    </h2>

    <p className="text-center text-sm text-gray-600 mb-4">{description}</p>
</div>
  )
}

export default CoreValueCard