import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Github } from "../../img/github-icon.svg";
import { ReactComponent as CirVitae } from "../../img/cv-icon.svg";
import { ReactComponent as Linkedin } from "../../img/linkedin-icon.svg";
import NavMenuItem from "./NavMenuItem";

const NavMenu = ({ open, data }) => {
  return (
    <div id="navMenu" className={`navbar-menu ${open ? "is-open" : ""}`}>
      <NavMenuItem url={data.cv_pdf} Icon={CirVitae} />
      <NavMenuItem url={data.githuburl} Icon={Github} />
      <NavMenuItem url={data.linkedinurl} Icon={Linkedin} />
    </div>
  );
};

NavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    cv_pdf: PropTypes.string,
    githuburl: PropTypes.string,
    linkedinurl: PropTypes.string,
  }),
};

export default NavMenu;
