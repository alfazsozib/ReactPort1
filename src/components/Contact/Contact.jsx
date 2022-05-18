import React from "react";
import "./contact.css";
import "../../App.css";
import {FaFacebookSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import d from "../../images/banner.png"

function Contact() {
  return (
    <div className="contact_container" id="contact">
      <h1>Let's Talk</h1>
      <img id="image" src={d} alt="" />
      <div className="content_box">
      <form action="POST" className="cta_form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <button className="cta_btn" type="submit">
          Send Message
        </button>
      </form>
      {/* <div className="cards">
        <h2>alfazsozib@gmail.com</h2>
        <FaFacebookSquare className="icon-cn" /><span>Personal Email</span>               
      </div> */}
      {/* <div className="cards">
        <h2>alfazsozib@gmail.com</h2>
        <FaFacebookSquare /><span>Personal Email</span>               
      </div>
      <div className="cards">
        <h2>alfazsozib@gmail.com</h2>
        <FaFacebookSquare /><span>Personal Email</span>                */}
      {/* </div> */}
      <div className="con_icn">
        <FaFacebookSquare className="icn"/>
        <FaWhatsappSquare className="icn"/>
        <FaFacebookSquare className="icn"/>

      </div>
      </div>
    </div>
  );
}

export default Contact;
