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
            <a href="https://www.facebook.com/Alfazsozib/" target='_blank' className='icon'><FaFacebookSquare/></a>
            <a href="https://web.whatsapp.com/" target="_blank" className='icon'><FaWhatsappSquare/></a>
            <a href="https://www.linkedin.com/in/md-alfaz-hosain-sozib-b20260164/" target="_blank" className='icon'><FaLinkedin/></a>
        </div>
        {/* <div className="man_photo">
            <img src={manImg} alt="" />
        </div> */}
    </div>
  )
}

export default Header