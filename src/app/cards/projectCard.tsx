import React from 'react'
import Image from '../../../node_modules/next/image'

interface ProjectCardProps {
    imageurl: string;
    title: string;
    description: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ imageurl, title, description }) => {  
  return (
    <div
            className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110 w-[80%] h-full space-y-1"
          >
            <div className='w-[30%] h-[45%]  flex items-center justify-center'>
            <Image
              src={imageurl}
              alt={title}
              width={96}
              height={96}
              className="xl:w-[90%] xl:h-[90%] lg:w-[90%] lg:h-[80%] md:w-[90%] md:h-[75%] sm:w-[90%] sm:h-[75%]  rounded-lg width100 height75"
            />
            </div>
            <div className='w-full h-1/2'>
            <h2 className="xl:text-[18px] lg:text-[15px] md:text-[14px]  sm:text-[13px] font-semibold text-black text-center font16">
              {title}
            </h2>
            <p className="text-10px leading-[13px] xl:leading-[15px] lg:leading-[13px] md:leading-[12px] sm:leading-[10px] xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-center text-gray-600 font12">{description}</p>
            </div>
          </div>
  )
}

export default ProjectCard;