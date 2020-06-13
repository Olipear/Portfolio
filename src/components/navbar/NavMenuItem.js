import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const NavMenuItem = ({ url, alt, Icon }) => {

    const disabled = !url
  return (
    <a
      className="menu-item"
      href={url}
      target={!disabled ? "_blank" : ""}
      rel="noopener noreferrer"
      title={alt}
    >
    <motion.span 
        className={`icon ${!disabled? "" : "disabled"}`}
        whileHover={{scale: 1.1}}
    >
        <Icon width={24} height={24}/>
    </motion.span>
    </a>
  );
};

NavMenuItem.propTypes = {
  url: PropTypes.string,
};

export default NavMenuItem;
