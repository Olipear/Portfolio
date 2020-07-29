import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const NavMenuButton = ({ open, setOpen }) => {
  return (
    <div 
        className={`navbutton ${open?'is-open':''}`} 
        aria-label="menu" aria-expanded={open?'true':'false'} 
        onClick={() => {setOpen(!open)}}
        role="menu"
    >
        <motion.span 
            animate={open?'open':'closed'}
            variants={{
                closed: {
                    top: 'calc(1rem - 3px)',
                    rotateZ: 0
                },
                open: {
                    top: 'calc(1rem + 6px)',
                    rotateZ: 225
                }
            }}
        />
        <motion.span 
            animate={open?'open':'closed'}
            variants={{
                closed:{
                    top: 'calc(1rem + 6px)',
                    rotateZ: 0
                },
                open:{
                    top: 'calc(1rem + 6px)',
                    rotateZ: 135
                }
            }}
        />
        <motion.span 
            animate={open?'open':'closed'}
            variants={{
                closed:{
                    top: 'calc(1rem + 15px)',
                    rotateZ: 0
                },
                open:{
                    top: 'calc(1rem + 6px)',
                    rotateZ: 225
                }
            }}
        />
    </div>
  );
};

NavMenuButton.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default NavMenuButton;
