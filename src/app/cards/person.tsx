import React from 'react'
interface PersonCardProps {
  imageurl: string
  name: string
  specialization: string
}
const Person: React.FC<PersonCardProps> = ({ imageurl, name, specialization }) => {
  return (
    <div className='w-full h-full flex flex-col  rounded-lg shadow-lg bg-white items-center justify-center '>
      <div className='xl:w-[80%] xl:h-[80%] lg:w-full lg:h-[80%] md:w-full md:h-[90%] sm:w-[90%] sm:h-[90%] flex items-center justify-center width100  height50 height75 width75 height75'>
        <img src={imageurl} alt={"pic"} className='w-3/4 h-3/4 rounded-full ' />
      </div>
      <div className='w-full h-[20%] flex flex-col '>
        <h1 className='text-[18px] font-bold text-center font14'>{name}</h1>
        <h2 className='text-[13px] text-center font10'>{specialization}</h2>
      </div>
    </div>
  )
}

export default Person