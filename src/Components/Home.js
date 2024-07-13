import React, { useEffect,useRef } from 'react'
import './Home.css'
import Pdf from '../Pdf/Resume.pdf'
import hero from './Data/hero.json'
import Typed from "typed.js"

const Hero = () => {
    const typedRef = useRef(null)
    useEffect(()=>{
        const option ={
            strings:["Welcome to my Profile","My Name is Syed Hassan","I'm Front End Developer"],
            typeSpeed:50,
            backSpeed:60,
            loop:true
        }
        const typed = new Typed(typedRef.current ,option)
        return()=>{
            typed.destroy()
        }
    } ,[])
    
  return (
    <div>
        <div className="container Home">
            <div className="Left-Section" data-aos="fade-up-right" data-aos-duration="1000">
                <h1 ref={typedRef}>
                    </h1>
                <a href={Pdf} download='Resume.pdf'  className="btn btn-outline-warning my-3">Download Resume</a>
            </div>
            <div className="Right-Section"data-aos="fade-up-left" data-aos-duration="1000">
                <div className="img">
                <img src={`${process.env.PUBLIC_URL}/assets/${hero.imgSrc}`} alt="" />
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Hero
