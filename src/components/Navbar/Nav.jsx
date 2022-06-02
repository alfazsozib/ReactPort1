import React, { useRef } from 'react'
import './nav.css'
import { FaBars } from 'react-icons/fa'
import logo from '../../images/logo-1.png'
import Fade from 'react-reveal/Fade';
// import { useRef } from 'react'

function Nav() {

  const navRef = useRef()

  const ShowNav = () =>{
    navRef.current.classList.toggle('hidenav')
  }

  // function clk() {
  //   return setIsMobile = true;
  // }


  return (
    <div>
      <Fade down>
        <nav className='navbar'>
            <img src={logo} className='logo' alt="" />
            <ul className='nav-ul' ref={navRef}>
                <li><a href="" className='active'>Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#aboutSection">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="cta" href='#contact' type='Submit'>Let's Talk</button>
            <button className= 'mobile-nav' >
              {/* {isMobile ? <RiBarChartHorizontalFill /> : <RiBarChartHorizontalFill />} */}
              < FaBars onClick={ShowNav} />
            </button>
        </nav>
        </Fade>
    </div>
  )
}

export default Nav