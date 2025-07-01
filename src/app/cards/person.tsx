import React from 'react'
interface PersonCardProps{
    imageurl:string
    name:string
    specialization:string
}
const Person:React.FC<PersonCardProps>= ({imageurl,name,specialization}) => {
  return (
    <div className='w-full h-full flex flex-col  rounded-lg shadow-lg bg-white'>
        <div className='w-full h-[80%]'>
        <img src={imageurl} alt={"pic" }className='w-full h-full p-4 '/>
        </div>
        <div className='w-full h-[20%] flex flex-col pt-5'>
        <h1 className='text-[18px] font-bold text-center'>{name}</h1>
        <h2 className='text-[13px] text-center'>{specialization}</h2>
        </div>
    </div>
  )
}

export default Person