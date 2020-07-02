import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import NavMenu from "./NavMenu";
import NavMenuButton from "./NavMenuButton";
import logo from "../../img/logo.svg";
import NavOverlay from "./NavOverlay";
import { motion } from "framer-motion";

const NavbarContent = ({ splash }) => {
  const data = useStaticQuery(navigationQuery).markdownRemark.frontmatter
    .navigation;

  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <NavOverlay open={open} />
      <div className="navbar-brand">
        <Link to="/" title="home" className="navbar-item">
          <motion.div style={{height: "100%"}} whileHover={{ scale: 1.1}}>
            <img src={logo} style={{ height: "100%" }} alt="olipear" />
          </motion.div>
        </Link>
      </div>

      <NavMenu data={data} open={open} setOpen={setOpen} />
      <NavMenuButton open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavbarContent;

const navigationQuery = graphql`
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
`;
