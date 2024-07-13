import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


const Contact = () => {
  return (
  <div className="container links"data-aos="zoom-in-up " data-aos-duration="1000">
    <h1>CONTACTS</h1>
    <div className="links-icons"  >
        <a href="https://www.instagram.com" target="_blank" className="items"><FaInstagram className='icon'/></a>
        <a href="https://www.facebook.com" target="_blank" className="items"><CiFacebook className='icon' /></a>
        <a href="https://linkedin.com" target="_blank" className="items"><CiLinkedin className='icon' /></a>
        <a href="https://www.twitter.com" target="_blank" className="items"><FaSquareXTwitter className='icon'/></a>
        <a href="https://www.github.com" target="_blank" className="items"><FaGithubSquare className='icon' /></a>
        <a href="mailto:syedhassanop9@gmail.com" target="_blank" className="items"><BiLogoGmail className='icon' /></a>
    </div>
  </div>
  )
}

export default Contact
