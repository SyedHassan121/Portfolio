import React from 'react'
import './Experience.css'
import experience from './Data/experience.json'


const Experience = () => {
  return (
   <div className="container exp my-3"><h1 className='Heading my-5'>EXPERIENCE</h1>
   {
    experience.map((data)=>{
    return<>
<div className="flexbox d-flex justify-content-center">
<div key={data.id} className='exp-items text-center d-flex justify-content-evenly aligh-item-center 'data-aos="zoom-in" data-aos-duration="1000">
    <div className="left"><img src={`${process.env.PUBLIC_URL}/assets/${data.imageSrc}`} alt="" /></div>
    <div className="right">
      <h2>{data.role}</h2>
      <h4><span>{data.startDate}{' to '}{data.endDate} </span>{"   "} <span style={{color:'yellow'}}>{data.location}</span></h4>
      <h4 style={{color:'yellow'}}>{data.experiences[0]}</h4>
    </div></div>
</div>
    </>

    })
   }
   </div>
   
  )
}

export default Experience
