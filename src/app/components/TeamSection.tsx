import React from 'react'
import { BsPersonVcard } from 'react-icons/bs'
import Person from '../cards/person'
import { Persons } from '../export'

const TeamSection = () => {
    return (
        <div className='w-full h-max py-14'>
            <h1 className='text-center text-[33px] font-bold'>Our Professional Team</h1>
            <div className='w-[100%] flex justify-center'>
                <p className='w-[65%] text-center break-words py-4'>At Petra Oasis Technical Cont., our cohesive teams are the cornerstone of both our initial foundation and ongoing success. As our most valued resource, we believe our team deserves the very best — an environment that promotes prosperity, continuous learning, and the enhancement of their skills. Carefully selected for their expertise and adaptability, we've built a team tailored to meet your most abstract and ambitious needs.</p>
            </div>
            <div className='flex justify-center flex-wrap gap-10'>
            {Persons.map((item,index)=>(
                <div className='w-1/4 px-2 h-[450px] transition duration-50 ease-in-out hover:scale-110' key={index}>
                <Person imageurl={item.imageurl || "https://www.petraoasis.com/images/avtar.jpg"} name={item.name} specialization={item.specialization} /> 
                </div>
            ))}+
            </div>
        </div>
    )
}

export default TeamSection