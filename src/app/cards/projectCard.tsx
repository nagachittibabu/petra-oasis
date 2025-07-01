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
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110 w-full "
          >
            <Image
              src={imageurl}
              alt={title}
              width={96}
              height={96}
              className="w-24 h-24 mb-4 rounded-lg"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-black text-center mb-2">
              {title}
            </h2>
            <p className="text-sm text-center text-gray-600">{description}</p>
          </div>
  )
}

export default ProjectCard