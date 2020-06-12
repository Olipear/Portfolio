import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { motion, useViewportScroll, useTransform, useMotionValue } from "framer-motion"
import NavMenu from './navbar/NavMenu'
import NavMenuButton from './navbar/NavMenuButton'
import logo from '../img/logo.svg'
import NavOverlay from './navbar/NavOverlay'
import useWindowDimensions from './UseWindowDimensions'

const navBarVariants = {
  splash: {
    padding: "1.5rem 0 1.5rem 0",
    height: "7rem",
    boxShadow: "rgba(0, 0, 0, 0) 0px 1px 5px",
    background: "rgba(248,248,248,0)"
  },
  small: {
    padding: "0.8rem 0 0.8rem 0",
    height: "3.4rem",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 5px",
    background: "rgba(248,248,248,1)"
  }
}

const Navbar = (props) => {

  const [open, setOpen] = useState(false);
  const {windowHeight} = useWindowDimensions();
  const { scrollY } = useViewportScroll()

  const height = useTransform( 
    scrollY, 
    [0, windowHeight], 
    [navBarVariants.splash.height, navBarVariants.small.height] 
  )
  const padding = useTransform(
    scrollY, 
    [0, windowHeight], 
    [navBarVariants.splash.padding, navBarVariants.small.padding] 
  )
  const boxShadow = useTransform(
    scrollY, 
    [0, windowHeight], 
    [navBarVariants.splash.boxShadow, navBarVariants.small.boxShadow] 
  )
  const background = useTransform(
    scrollY, 
    [0, windowHeight/2], 
    [navBarVariants.splash.background, navBarVariants.small.background] 
  )
  const style = {
    height,
    padding,
    boxShadow,
    background
  }

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
    <motion.nav
      className="navbar"
      style={style}
      role="navigation"
      aria-label="main-navigation"
      id="navigation"
    >
      <div className="container">
        <NavOverlay open={open} />
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="olipear" />
          </Link>
        </div>
        
        <NavMenu data={data} open={open}/>
        <NavMenuButton open={open} setOpen={setOpen} />
      </div>
    </motion.nav>
  )
}

export default Navbar
