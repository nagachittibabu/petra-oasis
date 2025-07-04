import React from 'react'
import Person from '../cards/person'
import { Persons } from '../export'

const TeamSection = () => {
    return (
        <div className='w-full h-max flex justify-center items-center '>
            <div className='w-[90%] h-[90%] space-y-4  pt-6'>
                <div className='w-full'>
                <h1 className='text-center text-xl sm:text-2xl lg:text-4xl md:text-[3xl] font-bold font14'>Our Professional Team</h1>
                </div>
                <div className='w-[100%] flex justify-center'>
                    <p className='w-3/4 text-center break-words  text-[11px] xl:text-[16px] lg:text-[16px] md:text-[14px] width100 font10 '>At Petra Oasis Technical Cont., our cohesive teams are the cornerstone of both our initial foundation and ongoing success. As our most valued resource, we believe our team deserves the very best — an environment that promotes prosperity, continuous learning, and the enhancement of their skills. Carefully selected for their expertise and adaptability, we've built a team tailored to meet your most abstract and ambitious needs.</p>
                </div>
                <div className='flex justify-center space-x-0 xl:space-x-4 lg:space-x-4 md:sapce-x-3 space-x-2
            space-y-4
            flex-wrap    '>
                    {Persons.map((item, index) => (
                        <div className='xl:w-1/4 h-[350px] lg:w-[32%] md:w-[40%] sm:w-[38%] team_section ' key={index}>
                            <Person imageurl={item.imageurl || "https://www.petraoasis.com/images/avtar.jpg"} name={item.name} specialization={item.specialization} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamSection