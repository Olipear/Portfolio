import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import NavMenu from "./NavMenu";
import NavMenuButton from "./NavMenuButton";
import logo from "../../img/logo.svg";
import NavOverlay from "./NavOverlay";
import NavBarSplash from "./NavBarSplash";


const Navbar = ({ splash }) => {
  const data = useStaticQuery(
    graphql`
      query navigationQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            navigation {
              githuburl
              githublabel
              linkedinurl
              linkedinlabel
              cv_pdf
              cv_pdflabel
            }
          }
        }
      }
    `
  ).markdownRemark.frontmatter.navigation;

  const [open, setOpen] = useState(false);

  const navContent = (
    <div className="container">
      <NavOverlay open={open} />
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo" title="home">
          <img src={logo} style={{height: "100%"}} alt="olipear" />
        </Link>
      </div>
      <NavMenu data={data} open={open} />
      <NavMenuButton open={open} setOpen={setOpen} />
    </div>
  )

  if (splash) {
    return (
      <NavBarSplash>
        {navContent}
      </NavBarSplash>
    );
  } else {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        id="navigation"
      >
        {navContent}
      </nav>
    );
  }

  
};

export default Navbar;
