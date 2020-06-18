import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const NavMenuItem = ({ url, alt, Icon, setOpenOnFocus = false, setClosedOnBlur = false }) => {

  const disabled = !url

  let onBlurHandler = null;
  if( typeof setClosedOnBlur === "function") {
    onBlurHandler = () => setClosedOnBlur(false);
  }

  let onFocusHandler = null;
  if( typeof setOpenOnFocus === "function") {
    onFocusHandler = () => setOpenOnFocus(true);
  }
  
  return (
    <a
      className="menu-item"
      href={url}
      target={!disabled ? "_blank" : ""}
      rel="noopener noreferrer"
      title={alt}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    >
    <motion.div 
        className={`icon ${!disabled? "" : "disabled"}`}
        whileHover={{scale: 1.1}}
    >
        <h5>{alt}</h5><Icon width="24px" height="24px"/>
    </motion.div>
    </a>
  );
};

export default NavMenuItem;
