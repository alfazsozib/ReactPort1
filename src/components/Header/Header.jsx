import React from 'react'
import "./header.css"
import {FaFacebookSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import manImg from "../../images/banner.png"

function Header() {
  return (
    <div className="header_container">
      <img src={manImg} className="main_img" alt="" />
        <div className="content">
        <h1>I'm Alfa Sozib</h1>
        <h2>Freelance Developer/ Programmer.</h2>
        </div>
        <div className="header_contact">
            <a href="" className='icon'><FaFacebookSquare/></a>
            <a href="" className='icon'><FaWhatsappSquare/></a>
            <a href="" className='icon'><FaLinkedin/></a>
        </div>
        {/* <div className="man_photo">
            <img src={manImg} alt="" />
        </div> */}
    </div>
  )
}

export default Header