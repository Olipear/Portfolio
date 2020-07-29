import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Github } from "../../img/github-icon.svg";
import { ReactComponent as CirVitae } from "../../img/cv-icon.svg";
import { ReactComponent as Linkedin } from "../../img/linkedin-icon.svg";
import NavMenuItem from "./NavMenuItem";

const NavMenu = ({ open, setOpen, data }) => {

  return (
    <div id="navMenu" className={`navbar-menu ${open ? "is-open" : ""}`}>
      <NavMenuItem setOpenOnFocus={setOpen} url={data.cv_pdf?data.cv_pdf.publicURL:''} alt={data.cv_pdflabel} Icon={CirVitae} />
      <NavMenuItem url={data.githuburl} alt={data.githublabel} Icon={Github} />
      <NavMenuItem setClosedOnBlur={setOpen} url={data.linkedinurl} alt={data.linkedinlabel} Icon={Linkedin} />
    </div>
  );
};

NavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    cv_pdf: PropTypes.shape({
      publicURL: PropTypes.string
    }),
    cv_pdflabel: PropTypes.string,
    githuburl: PropTypes.string,
    githublabel: PropTypes.string,
    linkedinurl: PropTypes.string,
    linkedinlabel: PropTypes.string
  }),
};

export default NavMenu;
