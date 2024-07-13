import React from 'react'
import skills from './Data/skills.json'
import './Skills.css'
const Skills = () => {
  return (
   <>
   <div className="container Skills">
    <h1 className='Heading my-5'>SKILLS</h1>
    <div className="items">
    {
    skills.map((data)=>{
     return<>
      
      <div className="item " key={data.id} data-aos="flip-left" data-aos-duration="1000">
          <img src={`${process.env.PUBLIC_URL}/assets/${data.imageSrc}`} alt="" />
          <h3>{data.title}</h3>
        </div>
        
      </>
    })
    }
    </div>
   </div>
   </>
  )
}

export default Skills
