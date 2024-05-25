import React, { useState } from "react"
import { a } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/courses'>All Courses</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/team'>Team</a>
            </li>
            <li>
              <a href='/pricing'>Pricing</a>
            </li>
            <li>
              <a href='/journal'>Journal</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
            
          </ul>
          <div className='start'>
          <a href='/Login'>Login</a>
          </div>
          <buthrefn className='hrefggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </buthrefn>
        </nav>
      </header>
    </>
  )
}

export default Header;
