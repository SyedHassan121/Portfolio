import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <div className="container nav_bar"data-aos="fade-down" data-aos-duration="1000">
            <div className="Left nav_items">Porfolio</div>
            <div className="Right ">
                <a href="" className="nav_items">Home</a>
                <a href="" className="nav_items">Experience</a>
                <a href="" className="nav_items">Skills</a>
                <a href="" className="nav_items">Projects</a>
                <a href="" className="nav_items">Contact</a>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
