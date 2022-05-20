import React from 'react'
import './nav.css'
import logo from '../../images/logo-1.png'

function Nav() {
  return (
    <div>
        <nav className='navbar'>
            <img src={logo} className='logo' alt="" />
            <ul>
                <li><a href="" className='active'>Home</a></li>
                <li><a href="#aboutSection">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>
            <button className="cta" href='#contact' type='Submit'>Let's Talk</button>
        </nav>
    </div>
  )
}

export default Nav