import React from 'react'
interface PersonCardProps{
    imageurl:string
    name:string
    specialization:string
}
const Person:React.FC<PersonCardProps>= ({imageurl,name,specialization}) => {
  return (
    <div >
        <div>
        <img src={imageurl} alt="pic" />
        </div>
        <h1>{name}</h1>
        <h2>{specialization}</h2>
    </div>
  )
}

export default Person;