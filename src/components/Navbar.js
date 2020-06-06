import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { ReactComponent as Github } from '../img/github-icon.svg'
import { ReactComponent as CirVitae } from '../img/cv-icon.svg'
import { ReactComponent as Linkedin } from '../img/linkedin-icon.svg'


const Navbar = (props) => {

  const [active, setActive] = useState(false);
  const [isOnSplash, setSplashMode] = useState(true);

  const data = useStaticQuery(
    graphql`query navigationQuery {
      markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
        frontmatter {
          navigation {
            githuburl
            linkedinurl
            cv_pdf
          }
        }
      }
    }`
  ).markdownRemark.frontmatter.navigation

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
            href={data.cv_pdf||""}
            target={data.cv_pdf?"_blank":""}
            rel="noopener noreferrer"
            download
          >
            <span className={`icon ${data.cv_pdf?'': 'disabled'}`}>
              <CirVitae />
            </span>
          </a>
          <a
            className="menu-item"
            href={data.githuburl||""}
            target={data.githuburl?"_blank":""}
            rel="noopener noreferrer"
          >
            <span className={`icon ${data.githuburl?'': 'disabled'}`}>
              <Github />
            </span>
          </a>
          <a
            className="menu-item"
            href={data.linkedinurl}
            target={data.linkedinurl?"_blank":""}
            rel="noopener noreferrer"
          >
            <span className={`icon ${data.linkedinurl?'': 'disabled'}`}>
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
