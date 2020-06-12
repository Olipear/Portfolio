import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
    open: {
        clipPath: "circle(130vh at top right)",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 40
        }
    },
    closed: {
        clipPath: "circle(0px at top right)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const NavOverlay = ({ open }) => {

  return (

          <motion.div 
            className="navbar-overlay"
            variants={variants}
            animate={open?"open":"closed"}
        />
    
  );
};

NavOverlay.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default NavOverlay;
