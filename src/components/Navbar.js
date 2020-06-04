import React, { useState } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { ReactComponent as Github } from '../img/github-icon.svg'
import { ReactComponent as CirVitae } from '../img/cv-icon.svg'
import { ReactComponent as Linkedin } from '../img/linkedin-icon.svg'


const Navbar = (props) => {

  const [active, setActive] = useState(false);
  const [isOnSplash, setSplashMode] = useState(true);


  return (
    <nav
      className={`navbar ${isOnSplash?'splash':''}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className={`navbar-overlay ${active?'is-open':''}`}><span></span></div>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="olipear" />
          </Link>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${active?'is-open':''}`}
        >
          <a
            className="menu-item"
            href=""
            target=""
            rel="noopener noreferrer"
          >
            <span className="icon disabled">
              <CirVitae />
            </span>
          </a>
          <a
            className="menu-item"
            href="https://github.com/Olipear"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <Github />
            </span>
          </a>
          <a
            className="menu-item"
            href="https://www.linkedin.com/in/oliver-pearson-799140100/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <Linkedin />
            </span>
          </a>
        </div>
        <div 
          className={`navbutton ${active?'is-active':''}`} 
          aria-label="menu" aria-expanded={active?'true':'false'} 
          onClick={() => {setActive(active?false:true)}}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
