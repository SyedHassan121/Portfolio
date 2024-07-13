import React from 'react'
import project from './Data/projects.json'
import './Project.css'
const Project = () => {
  return (
    <>
    <div className="container project my-5">
        <h1>PROJECT</h1>
        <div className="row d-flex justify-content-center align-content-center">
            {
               project.map((data)=>{
             return<>
                <div className="projects col-md-4 col-lg-3 col-sm-6 mx-4 my-5" key={data.id}data-aos="flip-right" data-aos-duration="1000">
                <div className="card text-center bg-dark text-light" style={{width: '20rem'}}>
  <div className="img d-flex justify-content-center align-content-center p-3">
    <img src={data.imageSrc} className="card-img-top" alt="..." /></div>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.demo} className="btn btn-primary mx-2">Demo</a>
    <a href={data.source} className="btn btn-warning mx-2">Code</a>
  </div>
</div>
                </div></>
               }) 
            }
        </div>
    </div>
    </>
  )
}

export default Project
